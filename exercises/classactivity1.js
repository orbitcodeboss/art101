function checkMood(score) {
let scoreShow = (1,7,9)
if (scoreShow ==1, 7, 9) {moodResult ="yah" }}

  function showMood() {
    let randomScore = Math.floor(Math.random() * 10) + 1;
    let moodResult = checkMood(randomScore);

    $("#mood-display").html(
      "Score: " + randomScore + "<br>Your mood is: <b>" + moodResult + "</b>"
    );
  }

  $("#mood-button").click(function () {
    showMood();
  });       