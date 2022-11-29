$('body').hide();
$(document).ready(function() {
  $('.close').hide();
  $('.technical').hide();
  $('body').show();
  setTimeout(
    function(){
      if ($(window).width() < 450){
        $('.background-image').animate({'marginTop': '-10em', opacity: 0.5}, 1000);
      }else $('.background-image').animate({opacity: 0.5}, 1000)
  }, 2800);
  $('.btn').click(()=>{
    $(".slider").animate({bottom: '-100vh'},600);
    setTimeout($(".slider").hide(700),600);
    $('.technical').show();
    $('.close').show(1000);
  });
  $('.close').click(()=>{
    location.reload(true);
  }); 
});
