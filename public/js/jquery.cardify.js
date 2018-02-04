(function($) {
  $.fn.cardify = function() {
    $(this).find('img').each(function(i, image) {
      $(image).wrap('<figure></figure>');
      $(image).parent().append($('<figcaption></figcaption>').text($(image).attr('alt')));
    });
  };
})(jQuery);