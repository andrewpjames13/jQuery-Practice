$('document').ready(function() {

  $('button.red').hover(function() {
      $(this).addClass("green")
  });

  $('#btn-bg').on('click', function() {
    $('body').addClass("bg")
  });
});
