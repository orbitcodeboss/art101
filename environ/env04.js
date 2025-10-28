

// $(document).ready(function() {
 // const $container = $('#tile-container');
  //const numTiles = 10 * 10; 
  //const specialHomer = 77

  //for (let i = 0; i < numTiles; i++) {
    //const $img = $('<img>', {
       // src: 'environimages/regularhomer.png',
   //   });
   // $container.append($img);
 // }
// });

$(document).ready(function() {
  const $container = $('#tile-container');
  const numTiles = 10 * 10;
  for (let i = 0; i < numTiles; i++) {
    let imageSrc = 'environimages/regularhomer.png';

    if (i === 77) { 
      imageSrc = 'environimages/specialhomer1.png';
    }
    const $img = $('<img>', {
      src: imageSrc,
    });
     if (i === 77) {
      $img.on('click', function() {
        // When clicked, change text on the page
        $('#text1').text('you caught the homer');
      });
    }

    $container.append($img);
  }
  
});


$("#text2").click(function () {});
let count = 0;
    if( count <1){}

    
function askNumber() {
  const whatNumber = Math.floor(Math.random() ,10 * 10) + 1;
  let userNumber = prompt("try your hand at homer roulette. 1/100 is right");
  if (userNumber == whatNumber) {
    $("#output").html("yeah baby");
  } else {
    $("#output").html("woof");
  }
}

$("#homerbutton").click(function () {
    askNumber();
});