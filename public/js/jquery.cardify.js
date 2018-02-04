(function($) {
  $.fn.cardify = function() {
    $(this).find('img').each((i, image) => {
      $(image).wrap('<figure></figure>');
      $(image).parent().append($('<figcaption></figcaption>').text($(image).attr('alt')));
      $(image).next().hide();
      $(image).parent().mouseenter(function() {
        $(image).next().addClass('opacity').fadeIn('2000').show('slow');
      });
      $(image).parent().mouseleave(function() {
        $(image).next().fadeOut('2000').hide('slow');
      });
    });
  };
})(jQuery);