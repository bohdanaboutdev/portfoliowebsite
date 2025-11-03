$(document).ready(function() {

/**
 * Smooth scroll to target
 */
function smoothScrollTo( $target, offset ) {
    offset = typeof offset == 'undefined' ? 0 : offset;
    $( 'html, body' ).animate( {
        scrollTop: $target.offset().top - 50 - offset,
    }, 500 );
    $target.focus();
    if ( $target.is( ':focus' ) ) { // Checking if the target was focused
        return false;
    } else {
        $target.attr( 'tabindex', '-1' ); // Adding tabindex for elements not focusable
        $target.focus(); // Set focus again
    }
}

});