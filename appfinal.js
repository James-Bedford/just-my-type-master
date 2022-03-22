//all functionality but not working well

$(document).ready(function () {
  //let tscore = 1000;
  // let tspeed = 14;
  let a = 0;
  let count = 0;
  let blockMove = 18;
  let gameOver = 0;
  let score = 0;
  let mistake = 0;
  let speed = 0;
  let start = (startTime = new Date());
  //Detecting shift key has been pressed
  console.log(start);
  $(document).on("keydown", function (e) {
    let keyId = e.key.charCodeAt();
    if (e.key == `Shift`) {
      $(`#keyboard-upper-container`).css(`display`, `block`);
      $(`#keyboard-lower-container`).css(`display`, `none`);
    } else {
      $(`#${keyId}`).css("background-color", "yellow");
    }
  });
  //When shift is lifted lower keyboard returns
  $(document).on("keyup", function (e) {
    let keyId = e.key.charCodeAt();
    if (e.key == `Shift`) {
      $(`#keyboard-upper-container`).css(`display`, `none`);
      $(`#keyboard-lower-container`).css(`display`, `block`);
      count--; //stop the letters moving on with  shift key touch.
    } else {
      $(`#${keyId}`).css("background-color", "#F8F9FA"); //Bootstrap Gray
      $(`#target-letter`).text(singleLetter[count]); // individual letters from sentence.
      $(`#yellow-block `).css(`left`, blockMove); // Get the yellow block to move
      //let correctType = String.fromCharCode(keyId);
      // let press = e.key;
      //rightWrong(correctType, singleLetter, count, press);
      //blockMove = blockMove + 18;
      count++;
    }

    if (gameOver === 3) {
      console.log("Should be game over");
      swalWithBootstrapButtons
        .fire({
          title: "End of game!",
          text: `Score ${tscore} and typing speed ${tspeed} words a minute.`,
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "Play again?",
          cancelButtonText: "Quit?",
          reverseButtons: false,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire("3 - 2  - 1 ", "", "success");
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Bye!",
              "Please play again soon!",
              "ok"
            );
          }
        });
    }

    //END OF SENTENCE LOGIC
    //add new sentence and reset counters
    if (count >= newSentence + 2) {
      //console.log(`counter is ${count}`);
      console.log(`game over counter is ${gameOver}`);
      gameOver++; //counts the sentences
      count = 0;
      blockMove = 18;
      a++;
      $(`#sentence`).text(wordStore(a)); //place sentence to type in div.
      $(`#yellow-block `).css(`left`, blockMove);
      $(`#feedback`).empty(); // clear feedback
      $(`#target-letter`).empty;
      singleLetter = [];
      $(`#target-letter`).empty;
      targetLetters = [splitter()];
      newSentence = splitter().length;

      for (let x of targetLetters) {
        singleLetter = x;
        //console.log(`this is sl again ${singleLetter}`);
      }
      targetLetters = [splitter()];
      newSentence = splitter().length;

      //console.log(splitter());

      $(`#target-letter`).text(singleLetter[count]);

      // singleLetter = [];
    }
    //tick or cross
    //Check if pressed key is correct key
    let correctType = String.fromCharCode(keyId);
    if (correctType === singleLetter[count - 2]) {
      $(`#feedback`).append('<span class="glyphicon glyphicon-ok">');
      score++;
      blockMove = blockMove + 18;
      //count++;
      // console.log(`score: ${score}`);
    }
    if (correctType !== singleLetter[count - 2] && e.key !== `Shift`) {
      $(`#feedback`).append(`X`).css(`color`, `red`);
      mistake++;
      //count--; //dont move on
    }
    //} was else
  });

  $(`#sentence`).text(wordStore(a)); //place sentence to type in div.
  let newSentence = splitter().length;
  let targetLetters = [splitter()]; // call spiltter which contains full sentence split!
  let text = "";
  let singleLetter = [];

  for (let x of targetLetters) {
    singleLetter = x;
    // console.log(`this is sl ${singleLetter}`);
  }
}); //end document ready

//Detecting keypresses

//}); //end document ready
function xwordStore(i) {
  let sentences = [
    "ten ate nihi And rew enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate",
  ];
  return sentences[i];
}

function wordStore(i) {
  let sentences = ["ten ate nihi And", "Too ato ", "oat itain ", "it", "nee "];
  return sentences[i];
}

function splitter() {
  let str = document.getElementById("sentence").innerHTML;
  //console.log(str.split(""));
  return str.split("");
}

function speedTyped(words, time, erros) {
  //numberOfWords/minutes -2 * numberOfMistakes
  return speedTyped(words / time - 2) * minutes;
}

/*function rightWrong(correctType, singleLetter, count, press) {
  //tick or cross
  //Check if pressed key is correct key
  //let correctType = String.fromCharCode(keyId);
  if (correctType === singleLetter[count - 2]) {
    $(`#feedback`).append('<span class="glyphicon glyphicon-ok">');
    return score++;
    // console.log(`score: ${score}`);
  }
  // if (correctType !== singleLetter[count - 2] && e.key !== `Shift`) {
  if (correctType !== singleLetter[count - 2] && press !== `Shift`) {
    $(`#feedback`).append(`X`).css(`color`, `red`);
    return mistake++;
  }
} */
