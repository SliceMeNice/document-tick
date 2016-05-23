( function ( $ ) {

	var isTicking = false;
	var originalEvents = [];

	function requestTick( event ) {
		if ( event ) {
			originalEvents.push( event );
		}

		if ( !isTicking ) {
			window.requestAnimationFrame( tick );
		}

		isTicking = true;
	}

	function tick() {
		var originalEventTypes = originalEvents.map( function( event ) {
			return event.type;
		} );

		$( document ).trigger( 'tick', [ originalEventTypes, originalEvents ] );
		isTicking = false;
		originalEvents = [];
	}

	if ( !document.requestTick ) {
		document.requestTick = requestTick;
	}

} )( window.jQuery );