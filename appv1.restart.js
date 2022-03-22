$(document).ready(function () {
  let a = 0;
  $(`#sentence`).text(wordStore(a)); //place sentence to type in div.
  //Detecting shift key has been pressed
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
    } else {
      $(`#${keyId}`).css("background-color", "#F8F9FA"); //Bootstrap Gray
    }
  });
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
