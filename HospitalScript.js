function venkatesh() {
  debugger;
  let namee = $("#Username").val();
  let height = Number($("#height").val());
  let finalHeight = Number(height / 100);
  let lastHeight = Number(finalHeight ** 2).toFixed(2);
  let Weight = Number($("#weight").val());
  if (
    namee != undefined &&
    namee != "" &&
    finalHeight != undefined &&
    finalHeight != "" &&
    Weight != undefined &&
    Weight != ""
  ) {
    let bmi = (Weight / lastHeight).toFixed(2);
    console.log(bmi);
    if (bmi < 18.5) {
      document.getElementById(
        "result"
      ).innerHTML = `${namee.toUpperCase()}, You are a THIN! 😜`;
      $("#result").attr("style", "color:yellow");
    } else if (bmi >= 18.5 && bmi <= 25) {
      document.getElementById(
        "result"
      ).innerHTML = `${namee.toUpperCase()}, You are a NORMAL! 😍`;
      $("#result").attr("style", "color:green");
    } else if (bmi == "NaN") {
      $("#Username").val("");
      $("#height").val("");
      $("#weight").val("");
      alert("Please enter valid deatils!!");
    } else {
      document.getElementById(
        "result"
      ).innerHTML = `${namee.toUpperCase()}, You are a FAT! 🤦‍♂️`;
      $("#result").attr("style", "color:red");
    }
  } else {
    alert("Please enter valid deatils!!");
  }
}

function clearAll() {
  debugger;
  $("#Username").val("");
  $("#height").val("");
  $("#weight").val("");
  $("#result").attr("style", "display:none");
}
