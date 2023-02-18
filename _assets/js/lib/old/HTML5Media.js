is.useHTML5Video = function(){ return supports_h264_baseline_video(); }
is.useHTML5Audio = function(){ return !!document.createElement('audio').canPlayType; }