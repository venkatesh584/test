function checkEligible() {
  debugger;
  let fristCheckBox = document.getElementById("Seat");
  let secondCheckBox = document.getElementById("age");
  let thirdCheckBox = document.getElementById("adhar");
  let seat = "Seats is available";
  let ageee = "age is above 50";
  if (fristCheckBox.checked) {
    if (secondCheckBox.checked) {
      if (thirdCheckBox.checked) {
        let conf = confirm("Are you sure? you want to come inside?");
        if (conf) {
          document.getElementById("check").innerHTML = "Please come inside";
          $("#check").attr("style", "display:block");
          $("#check").attr("style", "color:green");
        } else {
          document.getElementById("check").innerHTML = "Take another Buss";
          $("#check").attr("style", "display:block");
          $("#check").attr("style", "color:green");
        }
      } else {
        document.getElementById(
          "check"
        ).innerHTML = `${seat}, ${ageee}, But you don't have Adhar Card`;
        $("#check").attr("style", "display:block");
        $("#check").attr("style", "color:orange");
      }
    } else {
      document.getElementById(
        "check"
      ).innerHTML = `${seat}, But your age is bellow 50`;
      $("#check").attr("style", "display:block");
      $("#check").attr("style", "color: #d82680");
    }
  } else {
    document.getElementById("check").innerHTML = "Seats is not available";
    $("#check").attr("style", "display:block");
    $("#check").attr("style", "color:red");
  }
}
