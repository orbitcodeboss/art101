
let introSentence;
introSentence = "<p>crabland. it's good. it's great even. welcome.</p>"


let myCreatures = ["crab, fish, kurt, bubbles, crawdad, superfish"]

let myFavoriteCreature = {
    type: "Crab",
    age: "Ancient",
    children: "Thousands",
    oceansLived: ["baltic", "atlantic", "indian",
    ],

};

let greatSentence;
greatSentence =  "<p>my favorite types of creatures are: " +myCreatures[0] + ", " +myCreatures[4] + "</p>";

greatSentence = greatSentence + "<p> blah blah </p>" + myFavoriteCreature.type + ", very " + 
myFavoriteCreature.age + "</p>"; 

let grandSentence;
grandSentence= "<p> crabs live in many oceans </p>" +myFavoriteCreature.oceansLived[0] + " " +  myFavoriteCreature.oceansLived[1];


$("#output").html(introSentence);
 $("#output2").html(greatSentence);
$("#output3").html(grandSentence);