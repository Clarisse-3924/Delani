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
  $("#work1").hover(function(){
    $(".work1").slideDown("quick",function ()
    {
    });
  });
});

$(document).ready(function(){
  $("#work2").hover(function(){
    $(".work2").slideDown("quick",function ()
    {
    });
  });
});

$(document).ready(function(){
  $("#work3").hover(function(){
    $(".work3").slideDown("quick",function ()
    {
    });
  });
});

$(document).ready(function(){
  $("#work4").hover(function(){
    $(".work4").fadeIn("quick",function ()
    {
    });
  });
});

$(document).ready(function(){
  $("#work5").hover(function(){
    $(".work5").fadeToggle("quick",function ()
    {
    });
  });
});
$(document).ready(function(){
  $("#work6").hover(function(){
    $(".work6").fadeIn("quick",function ()
    {
    });
  });
});


$(document).ready(function(){
  $("#work7").hover(function(){
      $(".work7").css("opacity", 0.6);
      $(".work7").fadeIn(800);
      $(".work7").fadeOut(100).stop();

  });
  $("#work8").hover(function(){
      $(".work8").fadeIn(800);
      $(".work8").fadeOut(50).stop();

      });
});
$(document).ready(function(){
  $("#form").submit(function(){
    var name=$("input#name").val();
    alert(name+" " +"We have received your message");
     
  });
})