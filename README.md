# document-tick

Calls to requestAnimationFrame [do stack](http://jsperf.com/single-raf-draw-calls-vs-multiple-raf-draw-calls/2) – use document.requestTick instead and listen for the 'tick' event.

Depends on jQuery, optionally add a [requestAnimationFrame polyfill](https://gist.github.com/paulirish/1579671).