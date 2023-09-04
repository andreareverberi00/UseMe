(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.avia = global.avia || {}, global.avia.dash = {})));
})(this, (function (exports) { 'use strict';

  // ../shaka/dist/avia.shaka.esm.js
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
  var SHAKA = "shaka";
  function isShakaSupported(context) {
    const { avia } = context;
    const { MimeType, PlaybackAdapterBase } = avia;
    return PlaybackAdapterBase.canPlay(context, [MimeType.DASH]);
  }
  function createShakaAdapter(context, options) {
    return __async(this, null, function* () {
      var _a;
      const { avia, resource, system, textTrackSettings, playerOptions } = context;
      const { playback } = resource;
      const { AudioTrackType, DrmType, ErrorCode, PlaybackAdapterBase, PlayerError, Util } = avia;
      if (!system.global.shaka) {
        try {
          const debug = options.debug ? ".debug" : "";
          yield Util.loadScript(
            { url: ((_a = options.dependencies) == null ? void 0 : _a.shaka) || `//cdnjs.cloudflare.com/ajax/libs/shaka-player/4.3.6/shaka-player.compiled${debug}.js` },
            playerOptions,
            () => {
              return system.global.shaka;
            }
          );
        } catch (error) {
          throw new PlayerError(ErrorCode.SHAKA_SDK_MISSING, "Could not load Shaka Player SDK", error);
        }
      }
      const {
        ErrorMessage,
        Header,
        PlayerHookType,
        LogLevel,
        PerformanceMode,
        RequestObjectType,
        TextTrackKind
      } = avia;
      const shaka2 = system.global.shaka;
      const isActive = (track) => track.active;
      const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b);
      const isUnd = (track) => (track == null ? void 0 : track.language) === "und";
      class ShakaAdapter extends PlaybackAdapterBase {
        /**
         * ShakaAdapter
         */
        constructor(context2, options2 = {}) {
          super(context2, options2, false);
          this.cleanUpVtt = false;
          this.isLiveStream = false;
          this.renderTextTrackNatively = true;
          this.audioSwitching = false;
          this.playerEventMap = {
            error: (event) => this.onError(event),
            streaming: () => this.onStreaming(),
            variantchanged: () => this.onVariantChanged(),
            adaptation: () => this.onVariantChanged(),
            emsg: (event) => this.onEmsg(event),
            metadata: (event) => this.onMetadata(event),
            trackschanged: Util.debounce(() => this.onTracksChanged(), 25),
            drmsessionupdate: () => this.onDrmSessionUpdate(),
            timelineregionenter: (event) => this.onTimelineRegionEnter(event)
          };
          this.onRequest = (type, request) => {
            var _a2, _b;
            const drm = this.context.resource.location.drm;
            if (type === shaka2.net.NetworkingEngine.RequestType.LICENSE) {
              if ((_a2 = drm.widevine) == null ? void 0 : _a2.header) {
                Object.assign(request.headers, drm.widevine.header);
              }
              if ((_b = drm.playready) == null ? void 0 : _b.header) {
                Object.assign(request.headers, drm.playready.header);
              }
            }
          };
          this.onResponse = (type, response) => {
            const cdn = response.headers[Header.MULTI_CDN];
            if (cdn != null) {
              this.delegate.cdnChange(cdn);
            }
          };
          this.logger.log(LogLevel.INFO, `Shaka Player version: ${shaka2.Player.version}`);
          if (typeof VTTCue === "undefined") {
            this.cleanUpVtt = true;
          }
          shaka2.polyfill.installAll();
          this.player = new shaka2.Player(this.video);
          const playerConfig = this.playerConfig = this.player.getConfiguration();
          this.addEvents(this.player, this.playerEventMap);
          let retry = this.playerConfig.streaming.retryParameters;
          retry.maxAttempts = 4;
          retry.baseDelay = 1e3;
          retry.backoffFactor = 2;
          retry.fuzzFactor = 0;
          retry = this.playerConfig.manifest.retryParameters;
          retry.maxAttempts = 2;
          retry.baseDelay = 1e3;
          const networkEngine = this.player.getNetworkingEngine();
          networkEngine.registerRequestFilter(this.onRequest);
          networkEngine.registerResponseFilter(this.onResponse);
          const { playready, widevine } = resource.location.drm;
          const { PLAYREADY, WIDEVINE } = DrmType;
          const configureDrm = (drm, system2) => {
            if (drm == null ? void 0 : drm.url) {
              playerConfig.drm.servers[system2] = drm.url;
              playerConfig.drm.advanced[system2] = {};
              if (drm.audioRobustness) {
                playerConfig.drm.advanced[system2].audioRobustness = drm.audioRobustness;
              }
              if (drm.videoRobustness) {
                playerConfig.drm.advanced[system2].videoRobustness = drm.videoRobustness;
              }
              playerConfig.drm.preferredKeySystems.push([system2, drm.priority]);
            }
          };
          configureDrm(widevine, WIDEVINE);
          configureDrm(playready, PLAYREADY);
          playerConfig.drm.preferredKeySystems = this.playerConfig.drm.preferredKeySystems.sort((a, b) => a[1] - b[1]).map((i) => i[0]);
          const abrConfig = playback.abr;
          const { restrictions, abr } = this.playerConfig;
          if (!isNaN(abrConfig.minBitrate)) {
            this.minBitrate = abrConfig.minBitrate;
            restrictions.minBandwidth = abrConfig.minBitrate;
          }
          if (!isNaN(abrConfig.maxBitrate)) {
            this.maxBitrate = abrConfig.maxBitrate;
            restrictions.maxBandwidth = abrConfig.maxBitrate;
          }
          if (!isNaN(abrConfig.startBitrate)) {
            abr.defaultBandwidthEstimate = abrConfig.startBitrate * 1.15;
          }
          const settings = context2.performanceSettings;
          if (settings.forwardBufferLength != null) {
            playerConfig.streaming.bufferingGoal = settings.forwardBufferLength;
          }
          if (settings.backBufferLength != null) {
            playerConfig.streaming.bufferBehind = settings.backBufferLength;
          }
          if (settings.mode === PerformanceMode.LOW) ;
          this.renderTextTrackNatively = textTrackSettings.native;
          const enableAdvancedCodecs = playback.enableAdvancedCodecs;
          const userVideoCodecs = !Util.isEmpty(playback.preferredVideoCodecs) ? playback.preferredVideoCodecs : null;
          const userAudioCodecs = !Util.isEmpty(playback.preferredAudioCodecs) ? playback.preferredAudioCodecs : null;
          if (enableAdvancedCodecs) {
            playerConfig.preferredVideoCodecs = userVideoCodecs || ["hev", "hvc", "dvhe"];
            playerConfig.preferredAudioCodecs = userAudioCodecs || ["ec-3", "ac-3"];
          }
          playerConfig.preferredTextLanguage = textTrackSettings.language;
          playerConfig.preferredAudioLanguage = playerOptions.audioLanguage;
          const { cmcd } = resource;
          if (cmcd.enabled) {
            playerConfig.cmcd = {
              enabled: true,
              contentId: cmcd.contentId || "",
              sessionId: cmcd.sessionId || "",
              useHeaders: cmcd.useHeaders
            };
          }
          if (options2.flattenCues === true) {
            playerConfig.textDisplayFactory = () => {
              const textDisplayer = new shaka2.text.SimpleTextDisplayer(this.video);
              const append = textDisplayer.append.bind(textDisplayer);
              const flatten = (cues) => cues.reduce((acc, cue) => {
                if (cue.payload) {
                  acc.push(Object.assign({}, cue, { nestedCues: [] }));
                }
                if (cue.nestedCues.length) {
                  acc = acc.concat(flatten(cue.nestedCues));
                }
                return acc;
              }, []);
              textDisplayer.append = (cues) => append(flatten(cues));
              return textDisplayer;
            };
          }
          Util.merge(
            playerConfig,
            options2.config
          );
          this.configure();
          this.player.getNetworkingEngine().registerRequestFilter((type, request) => {
            if (!this.delegate.hasHook(PlayerHookType.REQUEST)) {
              return void 0;
            }
            const value = Util.createRequest(request.uris[0], request.headers);
            const { RequestType } = shaka2.net.NetworkingEngine;
            let objectType;
            switch (type) {
              case RequestType.MANIFEST:
                objectType = RequestObjectType.MANIFEST;
                break;
              case RequestType.SEGMENT:
                objectType = RequestObjectType.SEGMENT;
                break;
              case RequestType.LICENSE:
              case RequestType.SERVER_CERTIFICATE:
              case RequestType.KEY:
                objectType = RequestObjectType.KEY;
                break;
              default:
                objectType = RequestObjectType.OTHER;
            }
            const metadata = { objectType };
            return this.delegate.applyHook(PlayerHookType.REQUEST, value, metadata).then((value2) => {
              request.uris[0] = value2.url;
              request.headers = value2.headers;
              request.allowCrossSiteCredentials = value2.credentials === "include";
            });
          });
          this.player.getNetworkingEngine().registerResponseFilter((type, response) => {
            if (!this.delegate.hasHook(PlayerHookType.RESPONSE)) {
              return void 0;
            }
            const isManifest = type === shaka2.net.NetworkingEngine.RequestType.MANIFEST;
            let { data } = response;
            if (isManifest && typeof TextDecoder !== "undefined") {
              data = new TextDecoder().decode(data);
            }
            return this.delegate.applyHook(PlayerHookType.RESPONSE, { url: response.uri, data }).then((value) => {
              response.uri = value.url;
              response.data = isManifest && typeof TextEncoder !== "undefined" ? new TextEncoder().encode(value.data) : value.data;
            });
          });
        }
        destroy() {
          this.playerEventMap.trackschanged.cancel();
          this.removeEvents(this.player, this.playerEventMap);
          clearTimeout(this.textTimeout);
          return this.player.destroy().then(() => {
            this.player = null;
            this.playerConfig = null;
            this.domTextTrack = null;
            if (this.cleanUpVtt) {
              delete window.VTTCue;
            }
            return super.destroy();
          });
        }
        /**
         *
         */
        getId() {
          return SHAKA;
        }
        /**
         *
         */
        load() {
          return super.load().then((metadata) => __async(this, null, function* () {
            var _a2;
            const startTime = playback.startTime;
            try {
              yield this.player.load(resource.location.mediaUrl, Util.isValidPlayheadTime(startTime) ? startTime : void 0);
              this.isLiveStream = this.player.isLive();
              this.manifestVariants = this.player.getVariantTracks();
              const textTrackUrl = resource.location.textTrackUrl;
              if (!Util.isEmpty(textTrackUrl)) {
                const mime = Util.getMimeType(textTrackUrl);
                yield this.player.addTextTrackAsync(textTrackUrl, "en", TextTrackKind.CAPTIONS, mime);
              }
              this.suppressErrors = false;
              metadata.fragment.mimeType = ((_a2 = this.getActiveVariantTrack()) == null ? void 0 : _a2.mimeType) || "";
              return metadata;
            } catch (error) {
              throw this.createPlayerError(error);
            }
          }));
        }
        /**
         *
         */
        resize() {
          const { maxHeight } = playback.abr;
          if (!playback.abr.capQualityToScreenSize && !Number.isFinite(maxHeight)) {
            return;
          }
          const low = this.getVariantTracks()[0];
          if (!low) {
            return;
          }
          let { clientWidth, clientHeight } = this.video;
          if (clientWidth < low.width || clientHeight < low.height) {
            clientWidth = low.width;
            clientHeight = low.height;
          }
          const { restrictions } = this.playerConfig;
          if (restrictions.maxWidth === clientWidth && restrictions.maxHeight === clientHeight) {
            return;
          }
          restrictions.maxWidth = clientWidth;
          restrictions.maxHeight = Math.min(clientHeight, maxHeight);
          this.configure();
        }
        /**
         *
         */
        suspend() {
          this.playerConfig.streaming.bufferingGoal = 1;
          this.playerConfig.streaming.rebufferingGoal = 1;
          this.configure();
        }
        /**
         *
         */
        resume() {
          this.playerConfig.streaming.bufferingGoal = 10;
          this.playerConfig.streaming.rebufferingGoal = 10;
          this.configure();
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
        clearText() {
          Util.clearCue(this.domTextTrack, this.video.currentTime);
        }
        /**
         *
         */
        setMinBitrate(value) {
          super.setMinBitrate(value);
          if (isNaN(value)) {
            value = -Infinity;
          }
          this.playerConfig.restrictions.minBandwidth = value;
          this.configure();
        }
        /**
         *
         */
        setMaxBitrate(value) {
          super.setMaxBitrate(value);
          if (isNaN(value)) {
            value = Infinity;
          }
          const maxAudioBandwidth = this.manifestVariants.reduce((acc, variant) => Math.max(variant.audioBandwidth, acc), 0);
          this.playerConfig.restrictions.maxBandwidth = value + maxAudioBandwidth;
          this.configure();
        }
        /**
         *
         */
        setAutoQualitySwitching(value) {
          this.playerConfig.abr.enabled = value;
          this.configure();
        }
        /**
         *
         */
        setQuality(quality) {
          const track = this.player.getVariantTracks().find((track2) => track2.id === quality.index);
          this.player.selectVariantTrack(track, true);
        }
        /**
         *
         */
        setAudioTrack(track) {
          if (!track) {
            this.logger.log(LogLevel.INFO, "ShakaAdapter: Audio track is null, will not set.");
            return;
          }
          this.audioSwitching = true;
          this.player.selectAudioLanguage(track.language, track.type);
        }
        /**
         *
         */
        setTextTrack(value) {
          var _a2;
          if (!value || value.id === ((_a2 = this.textTrack) == null ? void 0 : _a2.id)) {
            return;
          }
          this.textTrack = value;
          this.delegate.textTrackChange(value);
          this.updateTextTrack();
        }
        /**
         *
         */
        setTextTrackMode(mode) {
          this.updateTextTrack();
          this.delegate.textTrackDisplayModeChange(mode);
        }
        /**
         *
         */
        getMetrics() {
          const variant = this.getActiveVariantTrack();
          const stats = this.player.getStats();
          return {
            droppedVideoFrames: stats.droppedFrames,
            framerate: variant.frameRate || Number.NaN,
            bandwidth: stats.estimatedBandwidth
          };
        }
        /**
         *
         */
        getThumbnails(time) {
          return super.getThumbnails(time).then((thumbnails) => {
            if (this.getIsLiveStream()) {
              const { start, end } = this.player.seekRange();
              time = Util.mapToRange(time, 0, end - start, start, end);
            }
            return Promise.all(this.player.getImageTracks().map((track) => this.player.getThumbnails(track.id, time))).then((thumbs) => {
              thumbs.filter((thumb) => !!thumb).forEach((thumb) => {
                const { width, height, positionX, positionY, uris } = thumb;
                const url = uris[0];
                thumbnails.push({
                  x: positionX,
                  y: positionY,
                  width,
                  height,
                  url
                });
              });
              return thumbnails;
            });
          });
        }
        /**
         *
         */
        getSeekable() {
          return this.player.seekRange();
        }
        /**
         *
         */
        configure() {
          this.player.configure(this.playerConfig);
        }
        /**
         *
         */
        getVariantTracks() {
          return this.player.getVariantTracks().sort((a, b) => a.bandwidth - b.bandwidth);
        }
        /**
         *
         */
        getActiveVariantTrack() {
          return this.player.getVariantTracks().find(isActive) || {};
        }
        /**
         *
         */
        getAudioTrackIndex() {
          const { language, audioRoles } = this.getActiveVariantTrack();
          const role = this.getAudioRoles(audioRoles);
          const audioTracks = this.player.getAudioLanguagesAndRoles();
          return audioTracks.findIndex((item) => item.language === language && item.role === role);
        }
        /**
         *
         */
        getAudioTrack() {
          return this.player.getAudioLanguagesAndRoles()[this.getAudioTrackIndex()];
        }
        /**
         *
         */
        getAudioRoles(audioRoles) {
          return (audioRoles == null ? void 0 : audioRoles.join(",")) || "";
        }
        /**
         *
         */
        updateAudioTracks() {
          const audioTracks = this.player.getAudioLanguagesAndRoles();
          const variants = this.player.getVariantTracks();
          const findVariant = (track2) => variants.find(
            (variant) => variant.language === track2.language && track2.role === this.getAudioRoles(variant.audioRoles)
          );
          let tracks = audioTracks.map((track2, index) => {
            var _a2;
            return {
              index,
              id: index.toString(),
              type: track2.role === "description" || track2.role === "alternate" ? AudioTrackType.DESCRIPTION : AudioTrackType.MAIN,
              codec: ((_a2 = findVariant(track2)) == null ? void 0 : _a2.audioCodec) || "",
              language: track2.language,
              label: track2.label || track2.language
            };
          });
          let track = tracks[this.getAudioTrackIndex()];
          if (isUnd(track)) {
            const idx = tracks.length > track.index + 1 ? track.index + 1 : track.index;
            track = tracks[idx];
          }
          tracks = tracks.filter((track2) => !isUnd(track2));
          if (!equal(tracks, this.audioTracks)) {
            this.audioTracks = tracks;
            this.delegate.audioTracksChange(this.audioTracks);
          }
          if (!equal(track, this.audioTrack)) {
            this.updateAudioTrack(track);
          }
        }
        /**
         *
         */
        updateAudioTrack(track) {
          this.audioTrack = track;
          this.delegate.audioTrackChange(track);
          this.updateTextTrack();
        }
        /**
         *
         */
        updateTextTrack() {
          var _a2;
          const id = parseInt((_a2 = this.textTrack) == null ? void 0 : _a2.id);
          const tracks = this.player.getTextTracks();
          const track = tracks.find((track2) => track2.id === id);
          const forced = tracks.find((track2) => {
            var _a3;
            return track2.forced && track2.language === ((_a3 = this.audioTrack) == null ? void 0 : _a3.language);
          });
          const selected = textTrackSettings.enabled ? track : forced;
          const visible = textTrackSettings.enabled ? !!track : !!forced;
          if (selected) {
            this.player.selectTextTrack(selected);
          }
          this.player.setTextTrackVisibility(visible);
          if (!this.renderTextTrackNatively) {
            this.textTimeout = setTimeout(() => this.domTextTrack.mode = "hidden", 0);
          }
        }
        /**
         *
         */
        updateTextTracks() {
          const textTracks = this.player.getTextTracks().filter((track) => !track.forced);
          const tracks = textTracks.map((track) => {
            const kind = /subtitle/.test(track.kind) ? TextTrackKind.SUBTITLES : track.kind;
            return {
              id: track.id.toString(),
              language: track.language,
              kind,
              label: track.label || track.language
            };
          });
          if (!equal(tracks, this.textTracks)) {
            this.textTracks = tracks;
            this.delegate.textTracksChange(this.textTracks);
          }
          if (!this.domTextTrack) {
            this.domTextTrack = Array.from(this.video.textTracks).find((textTrack2) => textTrack2.label === "Shaka Player TextTrack");
            this.listenToTextTracks(true);
          }
          const textTrack = textTracks.find(isActive);
          const id = textTrack == null ? void 0 : textTrack.id.toString();
          if (!this.textTrack || this.textTrack.id !== id) {
            let track = this.textTracks.find((track2) => track2.id === id);
            if (!track) {
              track = Util.findDefaultTrack(this.textTracks, textTrackSettings.language);
            }
            this.setTextTrack(track);
            return;
          }
          this.player.setTextTrackVisibility(textTrackSettings.enabled);
        }
        updateQuality() {
          const variant = this.getActiveVariantTrack();
          const id = variant == null ? void 0 : variant.id;
          const quality = this.qualities.find((quality2) => quality2.index === id);
          this.quality = quality;
          this.delegate.qualityChange(quality);
        }
        normalizeQuality(track) {
          return {
            index: track.id,
            bitrate: track.videoBandwidth,
            width: track.width,
            height: track.height,
            codec: track.codecs,
            enabled: true
          };
        }
        /**
         *
         */
        createQualities() {
          if (!this.manifestVariants) {
            return [];
          }
          const audio = this.getAudioTrack();
          return this.manifestVariants.filter(
            (track) => this.getAudioRoles(track.audioRoles) === audio.role && Util.compareLanguageTags(track.language, audio.language)
          ).map(this.normalizeQuality);
        }
        /**
         *
         */
        refreshQualities() {
          this.qualities = this.createQualities();
          this.updateQualities();
          if (isFinite(this.maxBitrate)) {
            this.setMaxBitrate(this.maxBitrate);
          }
        }
        /**
         *
         */
        createPlayerError(error) {
          const Error2 = shaka2.util.Error;
          const Category = Error2.Category;
          const Code = Error2.Code;
          const toError = (code, message, cause, fatal = true) => {
            for (const key in Code) {
              const value = Code[key];
              if (value === error.code) {
                message += ` : ${key} / ${value}`;
                break;
              }
            }
            return this.createError(code, message, cause, fatal);
          };
          switch (error.category) {
            case Category.NETWORK:
              return toError(ErrorCode.SHAKA_NETWORK_ERROR, ErrorMessage.FATAL_PLAYBACK_NETWORK_ERROR, error);
            case Category.MANIFEST:
              return toError(ErrorCode.SHAKA_PARSE_ERROR, ErrorMessage.FATAL_PLAYBACK_MEDIA_ERROR, error);
            case Category.MEDIA:
              const code = error.code === Code.VIDEO_ERROR && error.data[0] === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED ? ErrorCode.SHAKA_SRC_NOT_SUPPORTED : ErrorCode.SHAKA_MEDIA_ERROR;
              return toError(code, ErrorMessage.FATAL_PLAYBACK_MEDIA_ERROR, error);
            case Category.DRM:
              return toError(ErrorCode.SHAKA_DRM_ERROR, ErrorMessage.FATAL_PLAYBACK_MEDIA_ERROR, error);
            default:
              return toError(ErrorCode.UNSPECIFIED_SHAKA_ERROR, ErrorMessage.UNSPECIFIED_ERROR, error, false);
          }
        }
        onCueChange(event) {
          const track = this.player.getTextTracks().find((track2) => track2.active);
          if (!track) {
            return;
          }
          super.onCueChange(event, track.forced);
        }
        /**
         *
         */
        onError(e) {
          const { code, message, cause, fatal } = this.createPlayerError(e.detail);
          this.throwError(code, message, cause, fatal);
        }
        /**
         *
         */
        onStreaming() {
          var _a2, _b;
          this.segmentDuration = (_b = (_a2 = this.player.getManifest()) == null ? void 0 : _a2.presentationTimeline) == null ? void 0 : _b.getMaxSegmentDuration();
        }
        /**
         *
         */
        onVariantChanged() {
          if (this.qualities == null) {
            return;
          }
          this.refreshQualities();
          this.updateQuality();
          if (this.audioSwitching) {
            this.audioSwitching = false;
            const { language, role } = this.getAudioTrack();
            const type = role === "description" || role === "alternate" ? AudioTrackType.DESCRIPTION : AudioTrackType.MAIN;
            const audioTrack = this.audioTracks.find((track) => track.language === language && track.type === type);
            this.updateAudioTrack(audioTrack);
          }
        }
        /**
         *
         */
        onTracksChanged() {
          this.resize();
          this.updateAudioTracks();
          this.updateTextTracks();
          this.refreshQualities();
          if (!this.quality) {
            this.updateQuality();
          }
        }
        /**
         *
         */
        onDrmSessionUpdate() {
          this.delegate.drmKeySystemCreated(this.player.keySystem());
        }
        /**
         *
         */
        onEmsg(event) {
          const emsg = event.detail;
          const txt = emsg.value;
          this.delegate.metadataCuepoint({
            id: emsg.schemeIdUri,
            info: txt,
            text: txt,
            data: emsg.messageData,
            source: emsg,
            startTime: emsg.startTime,
            endTime: emsg.endTime
          });
        }
        /**
         *
         */
        onMetadata(event) {
          const { payload } = event;
          this.metadataSurface.processId3(payload.key, {
            id: "",
            info: payload.description,
            text: payload.data,
            data: payload.data,
            source: event,
            startTime: event.startTime,
            endTime: event.endTime
          });
        }
        /**
         *
         */
        onTimelineRegionEnter(event) {
          if (this.video.seeking) {
            return;
          }
          const info = event.detail;
          const txt = info.value || info.eventElement.getAttribute("messageData");
          this.delegate.metadataCuepoint({
            id: info.schemeIdUri,
            info: txt,
            text: txt,
            data: info.eventElement.getAttribute("messageData"),
            source: info,
            startTime: info.startTime,
            endTime: info.endTime
          });
        }
      }
      return new ShakaAdapter(context, options);
    });
  }
  function createShakaPlugin(services, options) {
    const { avia, logger, player } = services;
    if (typeof TextDecoder === "undefined") {
      logger.warn("Polyfill warning: TextDecoder is not defined");
    }
    player.registerAdapter({
      id: SHAKA,
      role: [avia.AdapterRole.PLAYBACK],
      options,
      factory: createShakaAdapter,
      isSupported: isShakaSupported
    });
    return {
      getId() {
        return SHAKA;
      },
      destroy() {
      }
    };
  }
  function shaka(options = {}) {
    return {
      id: SHAKA,
      factory: createShakaPlugin,
      options
    };
  }

  // src/DashPlugin.ts
  var DASH = "dash";
  function createDashPlugin(services, options = {}) {
    const createOptions = (id) => {
      var _a;
      const opts = (_a = options.adapter) == null ? void 0 : _a[id];
      const dependencies = options.dependencies || {};
      return Object.assign({ debug: options.debug }, opts, { dependencies });
    };
    const plugins = [
      createShakaPlugin(services, createOptions(SHAKA))
    ];
    return {
      getId() {
        return DASH;
      },
      destroy() {
        plugins.map((plugin2) => {
          var _a;
          return (_a = plugin2.destroy) == null ? void 0 : _a.call(plugin2);
        });
      }
    };
  }
  function dash(options = {}) {
    return {
      id: DASH,
      factory: createDashPlugin,
      options
    };
  }

  // src/index.ts
  var ID = DASH;
  var createPlugin = createDashPlugin;
  var plugin = dash;

  exports.DASH = DASH;
  exports.ID = ID;
  exports.SHAKA = SHAKA;
  exports.createDashPlugin = createDashPlugin;
  exports.createPlugin = createPlugin;
  exports.createShakaAdapter = createShakaAdapter;
  exports.createShakaPlugin = createShakaPlugin;
  exports.dash = dash;
  exports.plugin = plugin;
  exports.shaka = shaka;

}));
//# sourceMappingURL=avia.dash.js.map
