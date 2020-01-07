/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
    // Get the modal
    var modal = document.getElementById("labura1");

    // Get the button that opens the modal
    var btn = document.getElementById("labura_pils");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Get the modal
    var modal2 = document.getElementById("labura2");

    // Get the button that opens the modal
    var btn2 = document.getElementById("labura_red");

    // Get the <span> element that closes the modal
    var span2 = document.getElementsByClassName("close")[1];

    // When the user clicks on the button, open the modal
    btn2.onclick = function(e) {
        e.preventDefault();
        modal2.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span2.onclick = function() {
            modal2.style.display = "none";
        }
        // Get the modal
    var modal3 = document.getElementById("labura3");

    // Get the button that opens the modal
    var btn3 = document.getElementById("labura_weiss");

    // Get the <span> element that closes the modal
    var span3 = document.getElementsByClassName("close")[2];

    // When the user clicks on the button, open the modal
    btn3.onclick = function(e) {
        e.preventDefault();
        modal3.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span3.onclick = function() {
        modal3.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal3) {
            modal3.style.display = "none";
        } else if (event.target == modal2) {
            modal2.style.display = "none";
        } else if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var $window = $(window),
        $body = $('body'),
        $nav = $('#nav');

    // Breakpoints.
    breakpoints({
        wide: ['961px', '1880px'],
        normal: ['961px', '1620px'],
        narrow: ['961px', '1320px'],
        narrower: ['737px', '960px'],
        mobile: [null, '736px']
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Nav.
    var $nav_a = $nav.find('a');

    $nav_a
        .addClass('scrolly')
        .on('click', function(e) {

            var $this = $(this);

            // External link? Bail.
            if ($this.attr('href').charAt(0) != '#')
                return;

            // Prevent default.
            e.preventDefault();

            // Deactivate all links.
            $nav_a.removeClass('active');

            // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
            $this
                .addClass('active')
                .addClass('active-locked');

        })
        .each(function() {

            var $this = $(this),
                id = $this.attr('href'),
                $section = $(id);

            // No section for this link? Bail.
            if ($section.length < 1)
                return;

            // Scrollex.
            $section.scrollex({
                mode: 'middle',
                top: '-10vh',
                bottom: '-10vh',
                initialize: function() {

                    // Deactivate section.
                    $section.addClass('inactive');

                },
                enter: function() {

                    // Activate section.
                    $section.removeClass('inactive');

                    // No locked links? Deactivate all links and activate this section's one.
                    if ($nav_a.filter('.active-locked').length == 0) {

                        $nav_a.removeClass('active');
                        $this.addClass('active');

                    }

                    // Otherwise, if this section's link is the one that's locked, unlock it.
                    else if ($this.hasClass('active-locked'))
                        $this.removeClass('active-locked');

                }
            });

        });

    // Scrolly.
    $('.scrolly').scrolly();

    // Header (narrower + mobile).

    // Toggle.
    $(
            '<div id="headerToggle">' +
            '<a href="#header" class="toggle"></a>' +
            '</div>'
        )
        .appendTo($body);

    // Header.
    $('#header')
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'left',
            target: $body,
            visibleClass: 'header-visible'
        });

})(jQuery);