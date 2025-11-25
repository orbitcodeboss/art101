let follow = {
    glasses: false,
    glasses2: false
};

$("#glasses").on("dblclick", function () {
    follow.glasses = !follow.glasses;
    follow.glasses2 = false; 
});

$("#glasses2").on("dblclick", function () {
    follow.glasses2 = !follow.glasses2;
    follow.glasses = false; 
});

$(document).on("mousemove", function (event) {
    if (follow.glasses) {
        $("#glasses").css({
            position: "absolute",
            left: event.pageX - 60,
            top: event.pageY - 60
        });
    }
    if (follow.glasses2) {
        $("#glasses2").css({
            position: "absolute",
            left: event.pageX - 60,
            top: event.pageY - 60
        });
    }
});

$("#glasses, #glasses2").each(function () {
    const $el = $(this);
    $el.data("original-left", $el.css("left"));
    $el.data("original-top",   $el.css("top"));
});


$("#reset").on("click", function () {
    $("#glasses, #glasses2").each(function () {
        $(this).css({
            left: $(this).data("original-left"),
            top: $(this).data("original-top")
        });
    });
    follow.glasses = false;
    follow.glasses2 = false;
});