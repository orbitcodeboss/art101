
let follow =false

$(document).on("dblclick", function() {
    follow=true;
    $(document).on("dblclick", function() {
    follow=false;
    $(document).on("dblclick", function() {
    follow=true; });
    
});
    
}),



$(document).mousemove(function(event) {
  if (follow) {
    $("#glasses").css({
    left: event.pageX - 60,
    top: event.pageY - 60,
    position: "absolute"
  });
    }
});


$(document).mousemove(function(event) {
  if (follow) {
    $("#glasses2").css({
    left: event.pageX - 60,
    top: event.pageY - 60,
    position: "absolute"
  });
    }
});


const originalLeft = $("#glasses").css("left");
const originalTop = $("#glasses").css("top");

$("#reset").on("click", function () {
  $("#glasses").css({
    left: originalLeft,
    top: originalTop
  });
});


const originalLeft1 = $("#glasses2").css("left");
const originalTop1 = $("#glasses2").css("top");

$("#reset").on("click", function () {
  $("#glasses2").css({
    left: originalLeft1,
    top: originalTop1
  });
});
