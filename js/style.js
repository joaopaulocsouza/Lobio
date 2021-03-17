let teste = 0;

if(window.innerWidth>1200){
  $('.carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
}else if(window.innerWidth>859){
  $('.carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2
  });
}
else if(window.innerWidth<=859){
  $('.carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
}

$("nav .drop").on("click",function(){
  if(window.innerWidth<=1010){
    if(teste === 0){
      teste = 1;
      return $(this).parents("ul").find("li").removeClass("exibir-drop"),
      $(this).parents("li").addClass("exibir-drop"),
      !1
    }else if(teste === 1){
      teste = 0;
      return $(this).parents("ul").find("li").removeClass("exibir-drop"),
      $(this).parents("li").removeClass("exibir-drop"),
      !1
    }
  }else{
    return $(this).parents("ul").find("li").removeClass("exibir-drop"),
      $(this).parents("li").addClass("exibir-drop"),
      !1
  }
})

$(".dropdown").on("mouseleave",function(){
  return $(this).parents("ul").find("li").removeClass("exibir-drop"),
  $(this).parents("li").removeClass("exibir-drop"),
  !1
})


$(window).on('load', function () {
  
  $('#preLoader .inner').fadeOut();
  $('#preLoader').delay(50).fadeOut('slow');
  $('body').delay(50).css({'overflow': 'visible'});
})

$('.carrossel-video').slick({
  dots: true
});