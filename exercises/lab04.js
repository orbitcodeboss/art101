// declaring an array with name myCommutes
let myCommutes = ["bus", "loop bus", "canondale", "bcycle", "myles's car", "daniel's car"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "bus",
    route: 11,
    print: "Mountain Lion",
    hasArticulation: true,
    drivers: ["grey beard", "grumpy,"],
};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[2] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";

$("#output").html(megaSentence);

