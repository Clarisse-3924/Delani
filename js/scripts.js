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


$(document).ready(function(){
  $("#pic1").hover(function(){
      $(".box1").css("opacity", 9);
      $(".box1").fadeIn(1000);
      $(".box1").fadeOut(100).stop();


     
  });
  $("#pic2").hover(function(){
      $(".box2").css("opacity", 9);
      $(".box2").fadeIn(800);
      $(".box2").fadeOut(100).stop();

      
  });
  $("#pic3").hover(function(){
      $(".box3").css("opacity", 9);
      $(".box3").fadeIn(800);
      $(".box3").fadeOut(100).stop();

      
  });
  $("#pic4").hover(function(){
      $(".box4").css("opacity", 9);
      $(".box4").fadeIn(800);
      $(".box4").fadeOut(100).stop();

      
  });
  $("#pic5").hover(function(){
      $(".box5").css("opacity", 9);
      $(".box5").fadeIn(800);
      $(".box5").fadeOut(100).stop();

      
  });
  $("#pic6").hover(function(){
      $(".box6").css("opacity", 9);
      $(".box6").fadeIn(800);
      $(".box6").fadeOut(100).stop();

      
  });
  $("#pic7").hover(function(){
      $(".box7").css("opacity", 9);
      $(".box7").fadeIn(800);
      $(".box7").fadeOut(100).stop();

      
  });
  $("#pic8").hover(function(){
      $(".box8").css("opacity", 9);
      $(".box8").fadeIn(800);
      $(".box8").fadeOut(100).stop();

      
  });


});
