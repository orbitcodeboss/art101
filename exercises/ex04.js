var count = 0;
let colorCount =0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"]; // new line tp add

$("#needy-button").click(function () {

    if( count <5){mood = "yaay bumbo"; }
    else if ( count >=5 && count (count<10)) {mood =
        "elite bumbo";
    }
    else { mood = "grunt bumbo"; }

    let reminder=count % colors.length; 

    $("#needy-button").html( "Clicks: " + count + " Color: " 
        + colors[colorCount] + " " +mood); 

$("body").css("background-color",  colors [colorCount]);

        if (colors[colorCount] == "Orchid") {
            
        }

   $("body").css
("background-color", colors[colorCount]);


$("body").append("<img width=50 src 'images/derpultra.png'>");

    count = count + 1;
    colorCount = colorCount +1;

    if (colorCount == 4 ) { colorCount=0; }

});

