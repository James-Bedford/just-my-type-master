$(document).ready(function () {
  let a = 0;
  let count = 0;
  let blockMove = 18;
  let gameOver = 0;
  //let score = 0;
  // let mistake = 0;
  let speed = 0;
  let start = new Date();
  let end;
  let displaySentence = $(`#sentence`);
  let targetLetters = []; // call spiltter which contains full sentence split!
  let singleLetter = [];
  let singleLetterCount = 0;
  let point = 0;
  let mistake = 0;

  let sentences = [
    "ten ate nihi And rew enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate",
  ];
  /////   Display Code ///////

  $(`#sentence`).text(wordStore(a));

  ///// End Display Code //////

  targetLetters = [splitter()]; // call spiltter which contains full sentence split!

  for (let x of targetLetters) {
    singleLetter = x;
  }
  $(`#target-letter`).text(singleLetter[singleLetterCount]); // individual letters from sentence.

  $(document).on("keydown", function (e) {
    $(`#sentence`).text(wordStore(a));
    let keyId = e.key.charCodeAt();
    if (e.key == `Shift`) {
      $(`#keyboard-upper-container`).css(`display`, `block`);
      $(`#keyboard-lower-container`).css(`display`, `none`);
    } else {
      $(`#${keyId}`).css("background-color", "yellow");
    }
  });

  $(document).on("keyup", function (e) {
    let keyId = e.key.charCodeAt();
    let correctType = String.fromCharCode(keyId); //get the key pressed

    if (e.key == `Shift`) {
      $(`#keyboard-upper-container`).css(`display`, `none`);
      $(`#keyboard-lower-container`).css(`display`, `block`);
      //count--; //stop the letters moving on with  shift key touch.
    } else if (correctType === singleLetter[singleLetterCount]) {
      singleLetterCount++;
      $(`#target-letter`).text(singleLetter[singleLetterCount]);
      $(`#${keyId}`).css("background-color", "#F8F9FA"); //Bootstrap Gray
      $(`#feedback`).append('<span class="glyphicon glyphicon-ok">'); //added a tick
      point++;
      blockMove = blockMove + 18; //move yellow block
      $(`#yellow-block `).css(`left`, blockMove); // Get the yellow block to move
      //console.log(`word str length ${sentences.length - 1} and a is ${a}`);
    } else if (a >= sentences.length - 1) {
      //end of game
      end = new Date();
      let finalTime = (end - start) / 1000;
      //numberOfWords/minutes -2 * numberOfMistakes
      let speed = (54 / (finalTime - 2)) * mistake;
      console.log(
        `End of game you scored${point} and ${mistake} mistakes speed is ${speed}`
      );
      Swal.fire({
        title:
          "End of game you scored " +
          point +
          " points and made " +
          mistake +
          " mistakes typing speed is " +
          speed +
          " words a minute.",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Play Again",
        denyButtonText: `Quit Game`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Starting Again!", "", "success");
          location.reload();
        } else if (result.isDenied) {
          Swal.fire("Play again soon", "", "info");
          window.close();
        }
      });
    } else if (singleLetterCount >= singleLetter.length) {
      //change sentence  logic
      a++;
      singleLetterCount = 0; //reset the count
      blockMove = 18; //reset to 18px left
      $(`#yellow-block `).css(`left`, blockMove);
      $(`#feedback`).empty(); // clear feedback
      $(`#sentence`).text(wordStore(a)); //new sentence appears.
      targetLetters = [splitter()]; // call spiltter which takes new sentence.
      for (let x of targetLetters) {
        singleLetter = x;
      }
      $(`#target-letter`).text(singleLetter[singleLetterCount]); //finally populate the target letter array again.
    } else {
      $(`#${keyId}`).css("background-color", "#F8F9FA"); //Bootstrap Gray
      $(`#feedback`).append(`X`).css(`color`, `red`);
      mistake++;
    }
  });

  function wordStore(i) {
    let sentences = [
      "ten ate nihi And rew enet ite ate inet ent eate",
      "Too ato too nOt enot one totA not anot tOO aNot",
      "oat itain oat tain nate eate tea anne inant nean",
      "itant eate anot eat nato inate eat anot tain eat",
      "nee ene ate ite tent tiet ent ine ene ete ene ate",
    ];
    return sentences[i];
  }

  function splitter() {
    let str = document.getElementById("sentence").innerHTML;
    //console.log(str.split(""));
    return str.split("");
  }
});
