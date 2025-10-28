
function askNumber() {
  const whatNumber = Math.floor(Math.random() * 10) + 1;
  let userNumber = prompt("Guess 1-10?");
  if (userNumber == whatNumber) {
    $("#output").html("You got it!");
  } else {
    $("#output").html("Noooooope");
  }
}

$("#good-button").click(function () {
    askNumber(5);
});