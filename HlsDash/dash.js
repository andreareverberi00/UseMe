var url =
  "https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd";
var player = dashjs.MediaPlayer().create();
player.initialize(document.querySelector("#video-dash-vod"), url, true);

var url =
  "https://livesim.dashif.org/livesim/chunkdur_1/ato_7/testpic4_8s/Manifest.mpd";
var player = dashjs.MediaPlayer().create();
player.initialize(document.querySelector("#video-dash-live"), url, true);
