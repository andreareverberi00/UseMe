(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.avia = global.avia || {}, global.avia.hls = {})));
})(this, (function (exports) { 'use strict';

  // ../hlsjs/dist/avia.hlsjs.esm.js
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  var HLSJS = "hlsjs";
  var LOAD_ERROR = "avia-load-error";
  function isHlsjsSupported(context) {
    var _a, _b;
    const { avia, resource, system } = context;
    const { Browser, MimeType, Os, PlaybackAdapterBase, Util } = avia;
    const isSafari = system.browser === Browser.SAFARI;
    const mimeType = Util.getResourceMimeType(resource);
    const mimeTypes = [MimeType.HLS, MimeType.HLS_ALT];
    const isM3u8 = mimeTypes.includes(mimeType);
    const fairplayDetected = !Util.isEmpty((_b = (_a = resource.location.drm) == null ? void 0 : _a.fairplay) == null ? void 0 : _b.appCertUrl);
    if (isM3u8 && fairplayDetected) {
      return false;
    }
    const isAndroid = system.os === Os.ANDROID;
    const osVersion = system.osVersionInfo;
    if (isM3u8 && !fairplayDetected && isAndroid && osVersion.majorVersion < 5) {
      return false;
    }
    const isIOS = system.os === Os.IOS;
    const unsupported = isM3u8 && isIOS && !isSafari;
    if (unsupported) {
      return false;
    }
    return PlaybackAdapterBase.canPlay(context, mimeTypes);
  }
  function createHlsjsAdapter(context, options) {
    return __async(this, null, function* () {
      var _a;
      const { avia, resource, system, playerOptions } = context;
      const { AudioTrackType, ErrorCode, PlayerHookType, PlayerError, PlaybackAdapterBase, RequestObjectType, Util } = avia;
      if (!system.global.Hls) {
        try {
          yield Util.loadScript(
            { url: ((_a = options.dependencies) == null ? void 0 : _a.hlsjs) || "//cdnjs.cloudflare.com/ajax/libs/hls.js/1.4.10/hls.min.js" },
            context.playerOptions,
            () => {
              return system.global.Hls;
            }
          );
        } catch (error) {
          throw new PlayerError(ErrorCode.HLS_SDK_MISSING, "Could not load hls.js SDK", error);
        }
      }
      const Hls = system.global.Hls;
      const {
        Browser,
        ErrorMessage,
        Header,
        LogLevel,
        PerformanceMode,
        RequestCredentials,
        TextTrackMode,
        waitForEvent
      } = avia;
      class HlsjsAdapter extends PlaybackAdapterBase {
        /**
         * HlsjsAdapter
         */
        constructor(context2, options2 = {}) {
          super(context2, options2, false);
          this.isLiveStream = false;
          this.totalDuration = 0;
          this.framerate = NaN;
          this.bandwidth = NaN;
          this.qualityInterval = NaN;
          this.withCredentials = false;
          this.minAutoLevel = NaN;
          this.maxAutoLevel = NaN;
          this.normalizeQuality = (item, index) => {
            return {
              index,
              bitrate: item.bitrate,
              width: item.width,
              height: item.height,
              codec: item.attrs ? item.attrs.CODECS : void 0,
              enabled: Util.validateQuality(item, this.minBitrate, this.maxBitrate, this.maxHeight, this.player.capLevelToPlayerSize && this.video)
            };
          };
          this.onLevelLoaded = (type, data) => {
            const { details } = data;
            this.isLiveStream = details.live;
            this.segmentDuration = details.averagetargetduration;
            this.totalDuration = details.totalduration;
          };
          this.onLevelSwitched = (type, data) => {
            const { level } = data;
            const maxLevel = Math.min(level, this.player.maxAutoLevel);
            this.quality = this.qualities.find((quality) => quality.index === maxLevel);
            this.delegate.qualityChange(this.quality);
          };
          this.onFragLoaded = (type, data) => {
            const stats = data.frag.stats;
            this.bandwidth = stats.bwEstimate;
          };
          this.onSubtitleTracksUpdated = (type, data) => {
            const tracks = data.subtitleTracks.filter((track) => !track.forced).map((track, index) => {
              var _a2;
              return {
                id: ((_a2 = track.id) == null ? void 0 : _a2.toString()) || index.toString(),
                language: track.lang,
                kind: track.type.toLowerCase(),
                label: track.name || track.lang,
                default: track.default
              };
            });
            this.textTracks = tracks;
            const defaultTrack = tracks.find((track) => track.default);
            if (!defaultTrack) {
              this.selectSubtitles(Util.findDefaultTrack(tracks, this.context.textTrackSettings.language));
            }
            this.delegate.textTracksChange(this.textTracks);
          };
          this.onSubtitleTrackSwitch = (type, data) => {
            const id = data.id.toString();
            const textTrack = this.textTracks.find((track) => track.id === id);
            if (data.id === -1 || !textTrack || this.textTrack === textTrack) {
              return;
            }
            this.selectSubtitles(textTrack);
          };
          this.onAudioTracksUpdated = (type, data) => {
            this.audioTracks = this.player.audioTracks.map((track, index) => {
              var _a2;
              return {
                index,
                id: (_a2 = track.id) == null ? void 0 : _a2.toString(),
                type: track.attrs.CHARACTERISTICS === "public.accessibility.describes-video" ? AudioTrackType.DESCRIPTION : AudioTrackType.MAIN,
                language: track.lang,
                codec: track.audioCodec,
                label: track.name || track.lang
              };
            });
            this.audioTrack = this.audioTracks[this.player.audioTrack];
            this.delegate.audioTracksChange(this.audioTracks);
            if (this.player.audioTrack === -1) {
              const audioTrack = Util.findDefaultTrack(this.audioTracks, playerOptions.audioLanguage);
              if (audioTrack) {
                this.player.audioTrack = audioTrack.index;
              }
            }
          };
          this.onAudioTrackSwitched = (type, data) => {
            this.delegate.audioTrackChange(this.audioTracks[data.id]);
          };
          this.onLoadError = (type, data) => {
            const { fatal } = data;
            const error = this.processError(data);
            if (!fatal) {
              this.error(error);
              return;
            }
            this.player.emit(LOAD_ERROR, LOAD_ERROR, error);
          };
          this.onError = (type, data) => {
            this.error(this.processError(data));
          };
          this.logger.log(LogLevel.INFO, `hls.js version: ${Hls.version}`);
          const { performanceSettings, textTrackSettings } = context2;
          const { playback } = resource;
          const defaults = Hls.DefaultConfig;
          const backBufferLength = system.browser === Browser.PLAYSTATION_4_MSE ? Infinity : performanceSettings.backBufferLength;
          const config = Util.merge(
            {
              debug: options2.debug,
              autoStartLoad: false,
              liveSyncDurationCount: playback.liveEdgeSyncFragmentCount,
              maxBufferLength: performanceSettings.forwardBufferLength || defaults.maxBufferLength,
              backBufferLength,
              maxMaxBufferLength: performanceSettings.topQualityForwardBufferLength || defaults.maxMaxBufferLength,
              manifestLoadingMaxRetry: 2,
              manifestLoadingRetryDelay: 1e3,
              levelLoadingRetryDelay: 500,
              // levelLoadingTimeOut: HlsjsRobustness.LEVEL_RETRY_TIMEOUT,
              fragLoadingRetryDelay: 500,
              // fragLoadingTimeOut: HlsjsRobustness.FRAGMENT_RETRY_TIMEOUT,
              cmcd: resource.cmcd.enabled ? resource.cmcd : null,
              capLevelToPlayerSize: !Number.isFinite(this.maxHeight) && playback.abr.capQualityToScreenSize,
              pLoader: this.createLoader(this, RequestObjectType.MANIFEST),
              fLoader: this.createLoader(this, RequestObjectType.SEGMENT),
              loader: this.createLoader(this, RequestObjectType.OTHER),
              ignoreDevicePixelRatio: playback.abr.ignoreDevicePixelRatio
            },
            options2.config
          );
          if (performanceSettings.mode === PerformanceMode.LOW) {
            Object.assign(config, {
              maxBufferSize: 2e7,
              liveSyncDurationCount: 6,
              stretchShortVideoTrack: true,
              maxBufferHole: 2.5,
              maxStarvationDelay: 10,
              highBufferWatchdogPeriod: 5,
              maxFragLookUpTolerance: 2.5,
              nudgeOffset: 0.25,
              nudgeMaxRetry: 5
            });
            playback.liveEdgeSyncFragmentCount = config.liveSyncDurationCount;
          }
          const xhrSetup = config.xhrSetup;
          config.xhrSetup = (xhr, url) => {
            xhr.withCredentials = this.withCredentials;
            xhrSetup == null ? void 0 : xhrSetup(xhr, url);
          };
          const player = this.player = new Hls(config);
          player.subtitleDisplay = textTrackSettings.native;
          const { Events } = Hls;
          player.on(Events.LEVEL_LOADED, this.onLevelLoaded);
          player.on(Events.LEVEL_SWITCHED, this.onLevelSwitched);
          player.on(Events.FRAG_LOADED, this.onFragLoaded);
          player.on(Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated);
          player.on(Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch);
          player.on(Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated);
          player.on(Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched);
        }
        /**
         *
         */
        getId() {
          return HLSJS;
        }
        /**
         *
         */
        destroy() {
          system.global.clearInterval(this.qualityInterval);
          const promise = waitForEvent(this.player, Hls.Events.MEDIA_DETACHING);
          this.player.destroy();
          return promise.then(() => {
            this.player = null;
            return super.destroy();
          });
        }
        createLoader(adapter, objectType) {
          const Loader = Hls.DefaultConfig.loader;
          return class AviaLoader extends Loader {
            load(context2, config, callbacks) {
              const { url, headers = {} } = context2;
              const aes = adapter.context.resource.location.drm.aes;
              const isKeyRequest = !Util.isEmpty(aes) && url.includes(aes.provider) && aes.header;
              return Promise.resolve().then(() => {
                const credentials = url.includes("akamaihd") && url.includes("csmil") ? RequestCredentials.INCLUDE : RequestCredentials.SAME_ORIGIN;
                const request = Util.createRequest(url, headers, credentials);
                if (isKeyRequest) {
                  Object.assign(headers, aes.header);
                }
                return request;
              }).then((request) => {
                if (adapter.delegate.hasHook(PlayerHookType.REQUEST)) {
                  const metadata = {
                    objectType: isKeyRequest ? RequestObjectType.KEY : objectType
                  };
                  return adapter.delegate.applyHook(PlayerHookType.REQUEST, request, metadata);
                }
                return request;
              }).then((request) => {
                Object.assign(context2, request);
                adapter.withCredentials = request.credentials === RequestCredentials.INCLUDE;
                const onSuccess = callbacks.onSuccess;
                callbacks.onSuccess = (response, stats, context3, xhr) => __async(this, null, function* () {
                  if (!adapter.delegate) {
                    return;
                  }
                  if (adapter.delegate.hasHook(PlayerHookType.RESPONSE)) {
                    response = yield adapter.delegate.applyHook(PlayerHookType.RESPONSE, response);
                  }
                  if (response.url.includes(".ts")) {
                    const cdn = Util.getHeader(Header.MULTI_CDN, xhr.getAllResponseHeaders());
                    if (cdn != null) {
                      adapter.delegate.cdnChange(cdn);
                    }
                  }
                  onSuccess(response, stats, context3, xhr);
                });
              }).then(() => {
                super.load(context2, config, callbacks);
              });
            }
          };
        }
        /**
         *
         */
        load() {
          return super.load().then((metadata) => __async(this, null, function* () {
            this.player.on(Hls.Events.ERROR, this.onLoadError);
            this.player.attachMedia(this.video);
            yield waitForEvent(this.player, Hls.Events.MEDIA_ATTACHED, LOAD_ERROR);
            this.player.loadSource(resource.location.mediaUrl);
            const manifest = yield waitForEvent(this.player, Hls.Events.MANIFEST_LOADED, LOAD_ERROR);
            this.initQualityInfo();
            this.initNativeTextTracks(manifest);
            const startTime = resource.playback.startTime;
            this.player.startLoad(Util.isValidPlayheadTime(startTime) ? startTime : -1);
            this.setBitrateRestrictionAtStartup();
            const data = yield waitForEvent(this.player, Hls.Events.FRAG_LOADING, LOAD_ERROR);
            this.player.off(Hls.Events.ERROR, this.onLoadError);
            this.player.on(Hls.Events.ERROR, this.onError);
            this.suppressErrors = false;
            metadata.fragment.mimeType = Util.getMimeType(data.frag.url);
            return metadata;
          }));
        }
        /**
         *
         */
        suspend() {
          this.player.stopLoad();
        }
        /**
         *
         */
        resume() {
          this.player.startLoad();
        }
        /**
         *
         */
        setTextTrack(track) {
          if (!track) {
            return;
          }
          if (this.textTrackSurface) {
            super.setTextTrack(track);
          } else {
            this.player.subtitleTrack = parseInt(track.id);
          }
        }
        /**
         *
         */
        setTextTrackMode(mode) {
          if (this.textTrackSurface) {
            super.setTextTrackMode(mode);
          } else {
            this.enabledSubtitles(mode);
            this.delegate.textTrackDisplayModeChange(mode);
          }
        }
        /**
         *
         */
        setMinBitrate(value) {
          super.setMinBitrate(value);
          this.player.config.minAutoBitrate = value - 1;
          this.updateQualityInfo();
        }
        /**
         *
         */
        setMaxBitrate(value) {
          super.setMaxBitrate(value);
          const reset = isNaN(value) || !Number.isFinite(value);
          this.player.capLevelToPlayerSize = reset ? resource.playback.abr.capQualityToScreenSize : false;
          this.player.autoLevelCapping = reset ? -1 : Util.getMaxBitrateIndex(this.player.levels, value);
          this.updateQualityInfo();
        }
        /**
         *
         */
        setAutoQualitySwitching(auto) {
          this.player.loadLevel = auto ? -1 : this.player.nextLoadLevel;
        }
        /**
         *
         */
        setQuality(quality) {
          this.player.loadLevel = quality.index;
        }
        /**
         *
         */
        setAudioTrack(track) {
          if (!track) {
            this.logger.log(LogLevel.INFO, "hls.js: Audio track is null, will not set.");
            return;
          }
          this.player.audioTrack = track.index;
          this.enabledSubtitles();
        }
        /**
         *
         */
        getIsLiveStream() {
          return this.isLiveStream;
        }
        /**
         *
         */
        getMetrics() {
          return {
            droppedVideoFrames: NaN,
            framerate: this.framerate,
            bandwidth: this.bandwidth
          };
        }
        /**
         *
         */
        resize() {
          this.setBitrateRestrictionAtStartup();
        }
        /**
         *
         */
        getSeekable() {
          const duration = this.video.duration;
          const start = this.getIsLiveStream() ? duration - this.totalDuration : 0;
          return { start, end: duration };
        }
        /**
         *
         */
        onCueChange(event) {
          super.onCueChange(event, this.player.subtitleTracks[this.player.subtitleTrack].forced);
        }
        /**
         *
         */
        initQualityInfo() {
          this.qualityInterval = system.global.setInterval(() => {
            const { minAutoLevel, maxAutoLevel } = this.player;
            if (minAutoLevel === this.minAutoLevel && maxAutoLevel === this.maxAutoLevel) {
              return;
            }
            this.minAutoLevel = minAutoLevel;
            this.maxAutoLevel = maxAutoLevel;
            this.updateQualityInfo();
          }, 250);
          this.updateQualityInfo();
        }
        /**
         *
         */
        updateQualityInfo() {
          this.qualities = this.player.levels.map(this.normalizeQuality);
          this.updateQualities();
        }
        /**
         *
         */
        initNativeTextTracks(manifest) {
          var _a2;
          const hasManifestTracks = (_a2 = manifest.subtitles) == null ? void 0 : _a2.length;
          const { textTrackUrl } = this.context.resource.location;
          if (hasManifestTracks) {
            if (textTrackUrl) {
              this.logger.warn("Detected subtitles in the manifest. Ignoring resource's textTrackUrl");
            }
            if (manifest.captions) {
              this.logger.warn("Detected subtitles in the manifest. Ignoring manifest captions");
            }
            return;
          }
          this.textTrackSurface = this.createTextTrackSurface();
        }
        /**
         *
         */
        selectSubtitles(track) {
          this.textTrack = track;
          this.delegate.textTrackChange(track);
          this.enabledSubtitles();
        }
        /**
         *
         */
        enabledSubtitles(mode = this.context.textTrackSettings.mode) {
          if (mode !== TextTrackMode.DISABLED) {
            this.listenToTextTracks(true);
            this.setTextTrack(this.textTrack);
          } else {
            const audioTrack = this.player.audioTracks[this.player.audioTrack];
            let index = -1;
            if (audioTrack) {
              const language = audioTrack.lang;
              index = this.player.subtitleTracks.findIndex((track) => track.forced && track.lang === language);
            }
            this.listenToTextTracks(index !== -1);
            this.player.subtitleTrack = index;
          }
        }
        /**
         *
         */
        setBitrateRestrictionAtStartup() {
          if (Number.isFinite(this.minBitrate)) {
            this.setMinBitrate(Math.max(this.minBitrate - 1, 0));
          }
          if (Number.isFinite(this.maxBitrate)) {
            this.setMaxBitrate(this.maxBitrate);
          }
          const startBitrate = resource.playback.abr.startBitrate;
          if (Number.isFinite(startBitrate)) {
            this.player.config.startLevel = Util.getMaxBitrateIndex(this.player.levels, startBitrate);
          }
          if (Number.isFinite(this.maxHeight)) {
            const index = Util.getMaxIndexForHeight(this.player.levels, this.maxHeight);
            if (!isNaN(index)) {
              this.player.capLevelToPlayerSize = false;
              this.player.autoLevelCapping = index;
            }
          }
          this.updateQualities();
        }
        /**
         *
         */
        processError(data) {
          let code = ErrorCode.UNSPECIFIED_HLSJS_ERROR;
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              return this.processNetworkErrors(data);
            case Hls.ErrorTypes.MEDIA_ERROR:
              return this.processMediaErrors(data);
            case Hls.ErrorTypes.MUX_ERROR:
              code = ErrorCode.HLSJS_MUX_ERROR;
            default:
              const msg = this.getErrorMessage(`${data.details}`, data.fatal);
              return this.createError(code, msg, data, data.fatal);
          }
        }
        processNetworkErrors(data) {
          const ErrorDetails = Hls.ErrorDetails;
          const message = data.fatal ? ErrorMessage.FATAL_PLAYBACK_NETWORK_ERROR : ErrorMessage.NONFATAL_PLAYBACK_NETWORK_ERROR;
          switch (data.details) {
            case ErrorDetails.LEVEL_LOAD_ERROR:
            case ErrorDetails.FRAG_LOAD_ERROR:
              return this.createError(
                ErrorCode.HLSJS_NETWORK_ERROR,
                message,
                data,
                data.fatal
              );
            case ErrorDetails.MANIFEST_PARSING_ERROR:
              return this.createError(
                ErrorCode.HLSJS_PARSE_ERROR,
                `${message} : ${data.details}`,
                data,
                data.fatal
              );
            default:
              return this.createError(
                ErrorCode.HLSJS_NETWORK_ERROR,
                `${message} : ${data.details}`,
                data,
                data.fatal
              );
          }
        }
        processMediaErrors(data) {
          const ErrorDetails = Hls.ErrorDetails;
          const message = data.fatal ? ErrorMessage.FATAL_PLAYBACK_MEDIA_ERROR : ErrorMessage.NONFATAL_PLAYBACK_MEDIA_ERROR;
          switch (data.details) {
            case ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR:
              return this.createError(
                ErrorCode.HLSJS_SRC_NOT_SUPPORTED,
                `${message} : ${data.details}`,
                data,
                data.fatal
              );
            default:
              return this.createError(
                ErrorCode.HLSJS_MEDIA_ERROR,
                `${message} : ${data.details}`,
                data,
                data.fatal
              );
          }
        }
      }
      return new HlsjsAdapter(context, options);
    });
  }
  function createHlsjsPlugin(services, options) {
    const { avia, player } = services;
    player.registerAdapter({
      id: HLSJS,
      role: [avia.AdapterRole.PLAYBACK],
      options,
      factory: createHlsjsAdapter,
      isSupported: isHlsjsSupported
    });
    return {
      getId() {
        return HLSJS;
      },
      destroy() {
      }
    };
  }
  function hlsjs(options = {}) {
    return {
      id: HLSJS,
      factory: createHlsjsPlugin,
      options
    };
  }

  // src/HlsPlugin.ts
  var HLS = "hls";
  function createHlsPlugin(services, options = {}) {
    const createOptions = (id) => {
      var _a;
      const opts = (_a = options.adapter) == null ? void 0 : _a[id];
      const dependencies = options.dependencies || {};
      return Object.assign({ debug: options.debug }, opts, { dependencies });
    };
    const plugins = [
      createHlsjsPlugin(services, createOptions(HLSJS))
    ];
    return {
      getId() {
        return HLS;
      },
      destroy() {
        plugins.map((plugin2) => {
          var _a;
          return (_a = plugin2.destroy) == null ? void 0 : _a.call(plugin2);
        });
      }
    };
  }
  function hls(options = {}) {
    return {
      id: HLS,
      factory: createHlsPlugin,
      options
    };
  }

  // src/index.ts
  var ID = HLS;
  var createPlugin = createHlsPlugin;
  var plugin = hls;

  exports.HLS = HLS;
  exports.HLSJS = HLSJS;
  exports.ID = ID;
  exports.createHlsPlugin = createHlsPlugin;
  exports.createHlsjsAdapter = createHlsjsAdapter;
  exports.createHlsjsPlugin = createHlsjsPlugin;
  exports.createPlugin = createPlugin;
  exports.hls = hls;
  exports.hlsjs = hlsjs;
  exports.plugin = plugin;

}));
//# sourceMappingURL=avia.hls.js.map
