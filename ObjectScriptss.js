let btn = document.getElementById("pikbtn");
btn.addEventListener("click", function () {
  debugger;
  let num = Math.floor(Math.random() * 14);
  let finalNum = num + 1;
  let gift = arr[finalNum - 1];
  // let intaerval = setInterval(function () {
  //   let count = Math.floor(Math.random() * 14);
  //   let finalcount = count + 1;
  //   document.getElementById(`${finalcount}`).classList.add("boxstyle");
  //   //document.getElementById(`${finalcount}`).classList.remove("boxstyle");
  // }, 1000);
  let timeId = setTimeout(function () {
    $("#result").text(
      "You Pick a number is : " +
        finalNum +
        ` Take a Gift ${gift}(🎁), have a good day 😃`
    );
    $(`#${finalNum}`).attr("style", "background-color: green; color: white;");
    //clearInterval(intaerval);
    // $(`.boxstyle`).attr(
    //   "style",
    //   "background-color: yellow; color: black; border:none !important"
    // );
  }, 3000);
  $("#result").text(`Please wait --- 🤔`);
  $(`.boxes`).attr("style", "background-color: yellow; color: black;");
});

let arr = [
  "₹ 100 cash",
  "₹ 150 cash",
  "₹ 200 cash",
  "₹ 250 cash",
  "₹ 300 cash",
  "₹ 350 cash",
  "₹ 400 cash",
  "₹ 450 cash",
  "₹ 500 cash",
  "₹ 600 cash",
  "₹ 700 cash",
  "₹ 800 cash",
  "₹ 900 cash",
  "₹ 1000 cash",
];
arr.forEach(function (value, index) {
  debugger;
  let eliment = `<div class="boxes" id=${index + 1}>${
    index + 1
  }. ${value}</div>`;
  document.getElementById("cont").insertAdjacentHTML("beforebegin", eliment);
});

// let student = ["Venkatesh","Suresh","Ramesh"];
// let finalvalue =student.map(function (value,curr,index) {
//    return value.toUpperCase();
// });
// console.log(finalvalue);

// let student = ["Venkatesh","Suresh","Ramesh"];
// let finalvalue =student.forEach(function (value,curr,index) {
//     debugger;
//    return value.toUpperCase();
// });
// console.log(finalvalue);

// let student = ["Venkatesh","Suresh","Ramesh"];
// let finalvalue =student.reduce(function (value,curr,index) {
//     debugger;
//    return value+" : "+curr;
// });
// console.log(finalvalue);

// let student = ["Venkatesh","Suresh","Ramesh"];
// let finalvalue =student.reduce(function (value,curr,index) {
//     debugger;
//    return (value+" : "+curr).toUpperCase();
// });
// console.log(finalvalue);
