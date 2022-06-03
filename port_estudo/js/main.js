jQuery(document).ready(function ($) {
    //FIXED HEADER
    window.onscroll = function () {
      if (window.pageYOffset > 140) {
        $("#header").addClass("active");
      } else {
        $("#header").removeClass("active");
      }
    }
  });
  
    //ISOTOPE
    let btns = $("#filter .button-group button");
  
    btns.click(function (e) {
      $("#filter .button-group button").removeClass("ativo");
      e.target.classList.add("ativo");
  
      let selector = $(e.target).attr("data-filter");
      $("#filter .grid").isotope({
        filter: selector,
  
      });
  
      $(window).on("load", function() {
        $("#filter .grid").isotope({
          filter: "*",
        });
  
      });
  
     //MAGNIFY
     $(".grid .popup-link").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
        tPrev: "Anterior",
        tNext: "Próxima",
        tCounter: "%curr% de %total%",
      },
    });
  
  
    });
  
  
  