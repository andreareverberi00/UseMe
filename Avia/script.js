// Create player, passing a container selector and
// plugin config via playerOptions
function createPlayer(selector) {
  return avia.createVideoPlayer({
    container: selector,
    plugins: [avia.hls.plugin(), avia.dash.plugin(), avia.ui.plugin()],
  })
}

// Provide a resource to the player
function playResource(player, mediaUrl) {
  const resource = {
    location: {
      mediaUrl,
    },
  }

  player
    .attachResource(resource)
    .then(() => {
      // resource successfully attached to player
      // video presentation may be clicked to start play
    })
    .catch((e) => {
      // a problem prevented attaching the resource
      console.log(e)
    })
}

createPlayer('#video-avia-hls-vod')
  .then((player) => {
    playResource(player, 'http://playertest.longtailvideo.com/adaptive/oceans_aes/oceans_aes.m3u8')
  })
  .catch((e) => {
    // problem with player creation
    console.log(e)
  })

createPlayer('#video-avia-hls-live')
  .then((player) => {
    playResource(player, 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8')
  })
  .catch((e) => {
    // problem with player creation
    console.log(e)
  })

createPlayer('#video-avia-dash-vod')
  .then((player) => {
    playResource(player, 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd')
  })
  .catch((e) => {
    // problem with player creation
    console.log(e)
  })

createPlayer('#video-avia-dash-live')
  .then((player) => {
    playResource(player, 'https://livesim.dashif.org/livesim/chunkdur_1/ato_7/testpic4_8s/Manifest.mpd')
  })
  .catch((e) => {
    // problem with player creation
    console.log(e)
  })
