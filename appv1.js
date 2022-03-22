$(document).ready(function () {
  $(document).keypress(function (event) {
    let key = event.keyCode ? event.keyCode : event.which;
    let ch = String.fromCharCode(key);
    // Swal.fire(`You pressed key : ${ch},${key}`);
    $(`#${key}`).css("background-color", "yellow");
    $(document).on("keypress", function (e) {
      //alert("You pressed shift");
      // Swal.fire(`Bingo`);
      /* #fff  return color */
    });
    // $("#97").css("background-color", "yellow");
  });

  //Detecting shift key has been pressed
  $(document).on("keydown", function (e) {
    if (e.which == 16) {
      //alert("You pressed shift");

      $(`#keyboard-upper-container`).css(`display`, `block`);
      $(`#keyboard-lower-container`).css(`display`, `none`);
    }
  });

  //When shift is lifted lower keyboard returns
  $(document).on("keyup", function (e) {
    if (e.which == 16) {
      //alert("You pressed shift");
      $(`#keyboard-upper-container`).css(`display`, `none`);
      $(`#keyboard-lower-container`).css(`display`, `block`);
    }
  });

  $(document).on("keydown", function (e) {
    if (e.which == 97) {
      //alert("You pressed shift");
      // Swal.fire(`Bingo`);
      $(`#97`).css("background-color", "yellow");
      /* #fff  return color */
    }
  });
  $(document).on("keyup", function (e) {
    if (e.which == 97) {
      //alert("You pressed shift");
      // Swal.fire(`Bingo`);
      $(`#97`).css("background-color", "#fff");
      /* #fff  return color */
    }
  });
}); //end document ready

//Detecting keypresses
/* $(document).keypress(function (event) {
    let key = event.keyCode ? event.keyCode : event.which;
    let ch = String.fromCharCode(key);
    Swal.fire(`You pressed key : ${ch},${key}`);
    // $("#97").css("background-color", "yellow");
  }); */

$(document).ready(function () {
  $(`#98`).keydown(function () {
    $(`#98`).css("background-color", "yellow");
  });
  $(`#98`).keyup(function () {
    $(`#98`).css("background-color", "pink");
  });
}); //end document ready

function keyPressYellow() {}
