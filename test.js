$(document).ready(function () {
  var list = $('.wrap>ul>li');
  list.mouseenter(function () {
    $(this).children('ul').show();
  });
  list.mouseleave(function () {
    $(this).children('ul').hide();  
  });

});
