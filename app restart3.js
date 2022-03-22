$(document).ready(function () {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "Cool",
  });
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
      blockMove = blockMove + 18;
      count++;
      console.log(`${count} ${newSentence}`);
      console.log(singleLetter[count]);

      if (gameOver === 4) {
        Swal.fire(`Game Over, you scored: ${score}, with a speed of ${speed}`);
      }

      //add new sentence and reset counters
      if (count >= newSentence) {
        gameOver++; //counts the sentences
        count = 0;
        blockMove = 18;
        a++;
        $(`#sentence`).text(wordStore(a)); //place sentence to type in div.
        $(`#yellow-block `).css(`left`, blockMove);
        $(`#feedback`).empty(); // clear feedback
        newSentence = splitter().length;
      }
      //tick or cross
      //Check if pressed key is correct key
      let correctType = String.fromCharCode(keyId);
      if (correctType === singleLetter[count - 2]) {
        $(`#feedback`).append('<span class="glyphicon glyphicon-ok">');
        score++;
        console.log(`score: ${score}`);
      }
      if (correctType !== singleLetter[count - 2] && e.key !== `Shift`) {
        $(`#feedback`).append(`X`).css(`color`, `red`);
        mistake++;
        console.log(`you pressed ${correctType}`);
      }
    }
  });

  $(`#sentence`).text(wordStore(a)); //place sentence to type in div.
  let newSentence = splitter().length;
  let targetLetters = [splitter()]; // call spiltter which contains full sentence split!
  let text = "";
  let singleLetter = [];
  for (let x of targetLetters) {
    text += x;
    singleLetter = x;
  }
}); //end document ready

//Detecting keypresses

//}); //end document ready
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
  // console.log(str.split(""));
  return str.split("");
}

function speedTyped() {
  //numberOfWords/minutes -2 * numberOfMistakes
}
