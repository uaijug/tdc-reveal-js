( function () {
    'use strict';

    var shortcut = {

        mouseControl: false,

        init: function () {
            window.addEventListener( "keydown", shortcut.toggleMouseControl, false );
            shortcut.showMouseControlStatus();
        },

        /**
         * Toggle mouse control on 'm' key pressed
         * @param  {[type]} e [description]
         * @return {[type]}   [description]
         */
        toggleMouseControl: function ( e ) {
            var keyCode = e.keyCode;


            if ( keyCode == 77 ) {
                if ( !shortcut.mouseControl ) {
                    shortcut.activateMouseControl();
                } else {
                    shortcut.deactivateMouseControl();
                }
                shortcut.showMouseControlStatus();
            }
        },

        showMouseControlStatus: function () {
            var mouseStatus = $( ".mouse-status" );

            if ( mouseStatus ) {
                var onClass = mouseStatus.data( 'on' );
                var offClass = mouseStatus.data( 'off' );

                if ( shortcut.mouseControl ) {
                    mouseStatus.removeClass( offClass );
                    mouseStatus.addClass( onClass );
                } else {
                    mouseStatus.removeClass( onClass );
                    mouseStatus.addClass( offClass );
                }
            }


        },

        activateMouseControl: function () {
            shortcut.mouseControl = true;
            window.addEventListener( "mousedown", shortcut.handleClick, false );
            window.addEventListener( "contextmenu", shortcut.noContextMenu, false );
        },

        deactivateMouseControl: function () {
            shortcut.mouseControl = false;
            window.removeEventListener( "mousedown", shortcut.handleClick );
            window.removeEventListener( "contextmenu", shortcut.noContextMenu );
        },

        noContextMenu: function ( e ) {
            e.preventDefault();
        },

        handleClick: function ( e ) {
            e.preventDefault();
            if ( e.button === 0 ) Reveal.next();
            if ( e.button === 2 ) Reveal.prev();
        }
    };

    shortcut.init();
} )();
