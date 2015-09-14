(function($) {

  $(document).ready(function() {
    var update = $('#update')
    var close = $("<div>", {'class': "update-close"}).text('x');

    update.prepend(close);
    close.click(function() {
      update.hide();
    });

    // toggleFieldset();
    $('#update fieldset.tabular legend').click(function() {
      $(this).closest('fieldset').toggleClass('show-children');
    });

    // redirect
    // CHECK ADMIN
    if ( $('#top-menu a.administration').length ) {
      $('$top-menu>ul>li').eq(0).hide();
      $('$top-menu>ul>li').eq(3).hide();
      $('$top-menu>ul>li').eq(4).hide();
    }
  });

})(jQuery);
