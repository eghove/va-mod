// JavaScript Document

// create the back to top button
$('#banner').prepend('<a href="#" class="back-to-top text-center padding-1" title="Return to the top of the page"><span class="show">TOP</span><i class="far fa-arrow-alt-circle-up fa-2x"></i></a>');

// change the value with how many pixels scrolled down the button will appear
var amountScrolled = 200;

$(window).scroll(function () {
	'use strict';
	if ($(window).scrollTop() > amountScrolled) {
		$('.back-to-top::before').fadeIn('slow');
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('.back-to-top::before').fadeOut('slow');
		$('a.back-to-top').fadeOut('slow');
	}
});

$('.usa-footer-return-to-top a,.back-to-top, .topper').click(function () {
	'use strict';
	$('html, body').animate({
		scrollTop: 0
	}, 400);
	return false;
});

$("a").on('click', function (event) {
	'use strict';
	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 400, function () {

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		});
	} // End if
});

$(function () {
	var elements = $('.sticky');
	Stickyfill.add(elements);
});
/* VCL Modal*/


var $modalTrigger = $('.vcl-crisis-line__button'), $modalWrapper = $('#modal-crisisline'), $modalClose = $('.vcl-modal__close'), $modalTitle = $('#vcl-crisis-primary'), $mainContent = $('#main-content');

function setModalButton() {
	var firstAnchor = document.getElementById("vcl-crisis-primary"),
		lastAnchor = document.getElementById("vcl-vcl-close-btn");

	function keydownHandler(e) {
		var evt = e || window.event;
		var keyCode = evt.which || evt.keyCode;
		if (keyCode === 9) { // TAB pressed
			if (evt.preventDefault) evt.preventDefault();
			else evt.returnValue = false;
			firstAnchor.focus();
		}
	}

	if (lastAnchor.addEventListener) lastAnchor.addEventListener('keydown', keydownHandler, false);
	else if (lastAnchor.attachEvent) lastAnchor.attachEvent('onkeydown', keydownHandler);

	'use strict';
	$modalTrigger.on("click", function (e) {
		$mainContent.attr('aria-hidden', 'true');
		$modalWrapper.attr('aria-hidden', 'false');
		$modalWrapper.css('display', 'block');
		$modalTitle.focus();
		deflectFocus();
	});
}

function setModalClose() {
	'use strict';
	$modalClose.on("click", function (e) {
		$modalWrapper.attr('aria-hidden', 'true');
		$modalWrapper.css('display', 'none');
		$mainContent.attr('aria-hidden', 'false');
		$modalTrigger.focus();
		$mainContent.off('.modalOpen');
	});
}

function deflectFocus() {
	'use strict';
	$mainContent.on('focusin.modalOpen', function (e) {
		$modalClose.focus();
	});
}

setModalButton();
setModalClose();

/* Tabs */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.tabs = factory();
  }
}(this, function() {

  var tabs = function(target) {

    var _ = {};

    _.tabs = target;

    _.toggle = _.tabs.querySelectorAll('.tabs__toggle');

    _.content = _.tabs.querySelectorAll('.tabs__content');

    _.reset = function() {
      for (var i = 0; i < _.toggle.length; i += 1) {
        _.toggle[i].classList.remove('tabs__toggle-active-last');
        _.content[i].classList.remove('tabs__content-active-last');
      }
    };

    _.activate = function() {
      var i = Array.prototype.indexOf.call(_.toggle, this);
      _.toggle[i].classList.toggle('tabs__toggle-active');
      _.toggle[i].classList.add('tabs__toggle-active-last');
      _.content[i].classList.toggle('tabs__content-active');
      _.content[i].classList.add('tabs__content-active-last');
    };

    _.aria = function() {
      for (var i = 0; i < _.toggle.length; i += 1) {
        var style = getComputedStyle(_.content[i]);
        if (style.getPropertyValue('display') !== 'none') {
          _.toggle[i].setAttribute('aria-expanded', true);
        } else {
          _.toggle[i].setAttribute('aria-expanded', false);
        }
      }
    };

    _.click = function(e) {
      e.preventDefault();
      _.reset();
      _.activate.call(this);
      _.aria();
    };

    _.init = function() {
      for (var i = 0; i < _.toggle.length; i += 1) {
        window.addEventListener('load', _.aria);
        window.addEventListener('resize', _.aria);
        _.toggle[i].addEventListener('click', _.click);
      }
    };

    return _;

  };

  return tabs;
    

}));
 
      var targets = document.querySelectorAll('.tabs');
      for (var i = 0; i < targets.length; i += 1) {
        var tabs = tabs(targets[i]);
        tabs.init();
      }
   