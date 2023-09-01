(function mainDash() {
  const manifestUri =
    "https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd";
  const manifestUriLive =
    "https://livesim.dashif.org/livesim/chunkdur_1/ato_7/testpic4_8s/Manifest.mpd"; // non va su safari

  function initApp() {
    // Install built-in polyfills to patch browser incompatibilities.
    shaka.polyfill.installAll();

    // Check to see if the browser supports the basic APIs Shaka needs.
    if (shaka.Player.isBrowserSupported()) {
      // Everything looks good!
      initPlayer();
    } else {
      // This browser does not have the minimum set of APIs we need.
      console.error("Browser not supported!");
    }
  }

  async function initPlayer() {
    // Create a Player instance.
    const video = document.getElementById("video-shaka-dash-vod");
    const player = new shaka.Player(video);

    const videoLive = document.getElementById("video-shaka-dash-live");
    const playerLive = new shaka.Player(videoLive);

    // Attach player to the window to make it easy to access in the JS console.
    window.player = player;
    window.playerLive = playerLive;

    // Listen for error events.
    player.addEventListener("error", onErrorEvent);
    playerLive.addEventListener("error", onErrorEvent);

    // Try to load a manifest.
    // This is an asynchronous process.
    try {
      await player.load(manifestUri);
      await playerLive.load(manifestUriLive);

      // This runs if the asynchronous load is successful.
      console.log("The video has now been loaded!");
    } catch (e) {
      // onError is executed if the asynchronous load fails.
      onError(e);
    }
  }

  function onErrorEvent(event) {
    // Extract the shaka.util.Error object from the event.
    onError(event.detail);
  }

  function onError(error) {
    // Log the error.
    console.error("Error code", error.code, "object", error);
  }

  document.addEventListener("DOMContentLoaded", initApp);
})();
