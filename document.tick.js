(function ( $ ) {

	var isTicking = false;

	function requestTick() {
		if ( !isTicking ) {
			window.requestAnimationFrame( tick );
		}

		isTicking = true;
	}

	function tick() {
		$( document ).trigger( 'tick' );
		isTicking = false;
	}

	if ( !document.requestTick ) {
		document.requestTick = requestTick;
	}

})( window.jQuery );