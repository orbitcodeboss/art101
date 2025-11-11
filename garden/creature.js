// when the button is clicked (event)

$("#add-creature").click(
    function(){

// a variable for storing names

// reach for this input field and grab the text from it
let crName = $("#crName").val();

//check for the field value do not add empty ones
if ( (crName== "") || (crName.length<12) ){// do nothing
}
else {
    $("#creature-list").append(crName + ", ")
}

//remove the name after it is added
$("#crName").val("");

});

// the magic move
//