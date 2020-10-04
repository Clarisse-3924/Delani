$(document).ready(function(){
  $(".design").click(function(){
      $(".design").toggle();
      $("#icon1").toggle();
  });
  $("#icon1").click(function(){
      $(".design").toggle();
      $("#icon1").toggle();
  });
  $("#devicon").click(function(){
      $("#devicon").toggle();
      $(".icon2").toggle();
  });
  $(".icon2").click(function(){
      $("#devicon").toggle();
      $(".icon2").toggle();
  });
  $(".product").click(function(){
      $(".product").toggle();
      $("#icon3").toggle();
  });
  $("#icon3").click(function(){
      $(".product").toggle();
      $("#icon3").toggle();
  });


});
