$(".jcake").hide();

// $("button").on("click", function() {
//     $(".jcake").fadeToggle();
// });

$("button").on("click", function() {
    $(".jblow").hide();
    $(".jcake").show();
    $(".cakeBtn").hide();
});

// $(document).ready(function() {
//     $(".newBtn").hide(); // hide new button by default
  
//     $(".cakeBtn button").click(function() {
//       $(this).text(function(i, text) {
//         return text === "Ono Click koro" ? "Go Back" : "Ono Click koro";
//       });
//       $(".newBtn").toggle(); // show new button after the previous button is clicked
//     });
//   });


$(document).ready(function() {
    $(".surpriseBtn").hide(); // hide new button by default
    $(".goBck1").hide();
  
    $(".cakeBtn button").click(function() {
      $(".surpriseBtn").show();
      $(".goBck1").show();
    });

  });




  $(document).ready(function() {
    $(".cakeBtn button").click(function() {
      $("h1").fadeOut("fast", function() {
        $(this).text(function(i, text) {
          return text === "Happy Birthday Jaanu" ? "Tumar Special Digital Cake" : "Happy Birthday Jaanu";
        }).fadeIn("fast");
      });
    });
  });