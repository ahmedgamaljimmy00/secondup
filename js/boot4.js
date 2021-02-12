  $(document).ready(function () {
    $(".home").on("mouseover" , function(){
      $(".ss").fadeIn(500)
    });
    $(".home").on("mouseleave" , function(){
      $(".ss").fadeOut(500)
    });

    var winH = $(window).innerHeight(),
        upperH = $(".upper-bar").innerHeight(),
        navH = $(".navbar").innerHeight();

  $(".slider , .carousel-item").height(winH - (upperH + navH));


  /*=========================.........features........========================================*/

  $(window).on("scroll" , function(){
    if($(window).scrollTop() + $(window).height() >= $(".features").offset().top ) {
      $(".feat1").delay(500).slideDown(1000);
      $(".feat2").delay(1000).slideDown(1000);
      $(".feat3").delay(1500).slideDown(1000);
      $(".feat4").delay(2000).slideDown(1000);
    };
  });

  /*============================================.........work.........=============================*/
  $(".work ul li").on("click" , function(){
    $(this).addClass("activee").siblings().removeClass("activee")
  });

  /*---control---*/
  $(".ch1").on("click" ,function(){
    $(".gallary img").parent().show()
  });

  $(".ch2").on("click" , function() {
    $(".gallary img").parent().hide();
    $(".web").parent().show()
  });

  $(".ch3").on("click" , function() {
    $(".gallary img").parent().hide();
    $(".logo").parent().show()
  });

  $(".ch4").on("click" , function() {
    $(".gallary img").parent().hide();
    $(".graphic").parent().show()
  });

  $(".ch5").on("click" , function() {
    $(".gallary img").parent().hide();
    $(".market").parent().show()
  });

  $(".ch6").on("click" , function() {
    $(".gallary img").parent().hide();
    $(".video").parent().show()
  });

    /*=================================================choose us======================================================*/
    $(window).on("scroll", function(){
      if($(window).scrollTop() + $(window).height()-200 >= $(".choose-us").offset().top) {
        $(".us-2").animate({
          right : "0"
        },1000);
      };

      if($(window).scrollTop() + $(window).height()-200 >= $(".choose-us").offset().top) {
        $(".us-1").animate({
          left : "0"
        },1000);
      };
    });

  /*============================================================statictis===================================*/
  
  if($(window).width()>900){
  $(window).on("scroll" , function() {
    if($(window).scrollTop() + $(window).height() -200 >= $(".stats").offset().top) {
      var myCou = document.getElementById("count1");
      function counting() {
        if(myCou.textContent >= 1354){
          clearInterval()
        }else {
          myCou.textContent = parseInt(myCou.textContent)+2
        }
      }
      setInterval(counting , 100)
    };
});

$(window).on("scroll" , function() {
  if($(window).scrollTop() + $(window).height()-200 >= $(".stats").offset().top) {
    var myCou = document.getElementById("count2");
    function counting() {
      if(myCou.textContent >= 165543){
        clearInterval()
      }else {
        myCou.textContent = parseInt(myCou.textContent)+187
      }
    }
    setInterval(counting ,100)
  };
});

$(window).on("scroll" , function() {
  if($(window).scrollTop() + $(window).height()-200 >= $(".stats").offset().top) {
    var myCou = document.getElementById("count3");
    function counting() {
      if(myCou.textContent >= 12546){
        clearInterval()
      }else {
        myCou.textContent = parseInt(myCou.textContent)+11
      }
    }
    setInterval(counting , 100)
  };
});

$(window).on("scroll" , function() {
  if($(window).scrollTop() + $(window).height()-200 >= $(".stats").offset().top) {
    var myCou = document.getElementById("count4");
    function counting() {
      if(myCou.textContent >= 9678076){
        clearInterval()
      }else {
        myCou.textContent = parseInt(myCou.textContent)+10567
      }
    }
    setInterval(counting , 100)
  };
});
  }else {
    $("#count1").text("1377");
    $("#count2").text("165775");
    $("#count3").text("12775");
    $("#count4").text("9658775");

  };

  /*===============================upppppppppppppp====================================================*/
  $(window).on("scroll" , function(){
    if($(window).scrollTop() > 1200) {
      $(".up").fadeIn(1000)
    }else {
      $(".up").hide()
    }
  });
  $(".up").on("click",function(){
    $("body , html").animate({
      scrollTop: "0px"
    },1000)
    $("up").css("outline","none")
  })
});















  /*============================================================================================================*/

  // $(window).on("scroll" , function(){
  //   if($(window).scrollTop()+$(window).height()>= $("#count").offset().top) {
  //     var myCo = document.getElementById("count");
  //     function counting() {
  //       if(myCo.textContent >= 1000) {
  //         clearInterval()
  //       }else {
  //         myCo.textContent = parseInt(myCo.textContent) + 1
  //       } 
  //     }
  //     setInterval(counting,100);
  //   }
  // })

  // console.log ($(".vvv").attr("data-value"))
  // $(".vvv").text($(".vvv").attr("data-value"))

