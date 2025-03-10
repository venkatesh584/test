// Latarry code Start
// let btn = document.getElementById("pikbtn");
// btn.addEventListener("click", function () {
//   debugger;
//   let num = Math.floor(Math.random() * 14);
//   let finalNum = num + 1;
//   let gift = arr[finalNum - 1];
//   // let intaerval = setInterval(function () {
//   //   let count = Math.floor(Math.random() * 14);
//   //   let finalcount = count + 1;
//   //   document.getElementById(`${finalcount}`).classList.add("boxstyle");
//   //   //document.getElementById(`${finalcount}`).classList.remove("boxstyle");
//   // }, 1000);
//   let timeId = setTimeout(function () {
//     $("#result").text(
//       "You Pick a number is : " +
//         finalNum +
//         ` Take a Gift ${gift}(🎁), have a good day 😃`
//     );
//     $(`#${finalNum}`).attr("style", "background-color: green; color: white;");
//     //clearInterval(intaerval);
//     // $(`.boxstyle`).attr(
//     //   "style",
//     //   "background-color: yellow; color: black; border:none !important"
//     // );
//   }, 3000);
//   $("#result").text(`Please wait --- 🤔`);
//   $(`.boxes`).attr("style", "background-color: yellow; color: black;");
// });

// let arr = [
//   "₹ 100 cash",
//   "₹ 150 cash",
//   "₹ 200 cash",
//   "₹ 250 cash",
//   "₹ 300 cash",
//   "₹ 350 cash",
//   "₹ 400 cash",
//   "₹ 450 cash",
//   "₹ 500 cash",
//   "₹ 600 cash",
//   "₹ 700 cash",
//   "₹ 800 cash",
//   "₹ 900 cash",
//   "₹ 1000 cash",
// ];
// arr.forEach(function (value, index) {
//   debugger;
//   let eliment = `<div class="boxes" id=${index + 1}>${
//     index + 1
//   }. ${value}</div>`;
//   document.getElementById("cont").insertAdjacentHTML("beforebegin", eliment);
// });
// Latarry code Start END

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

// Shoppig Code start
let arr = [
  {
    id: 1,
    pname: "Laptop",
    price: 50000,
  },
  {
    id: 2,
    pname: "Phone",
    price: 20000,
  },
  {
    id: 3,
    pname: "SmartWatch",
    price: 1000,
  },
  {
    id: 4,
    pname: "HeadPhone",
    price: 500,
  },
  {
    id: 5,
    pname: "Tablet",
    price: 5000,
  },
];
arr.forEach(function (value, index) {
  debugger;
  let eliment = `<div class="contain" id="contt${index + 1}" value="false">
        <div class="semi-container ${index + 1}">
          <span>${value.pname}-Rs ${value.price}</span>
        </div>
        <div class="addcart">
          <button onclick="addCart(event)" id=${index + 1}>Add to Cart</button>
        </div>
      </div>`;
  document.getElementById("dedupe").insertAdjacentHTML("beforeend", eliment);
});
let count = 0;
let bool = false;
function addCart(e) {
  debugger;
  let finalvau;
  let i;
  let value = e.target.id;
  for (i = 0; i <= i; i++) {
    if (value == i) {
      finalvau = $(`.${value}`).text().trim();
      // fbool = arr[i - 1].value = true;
      var res = document
        .getElementById(`contt${arr[i - 1].id}`)
        .getAttribute("value");
      if (res == "false") {
        let fcount = arr[i - 1].price;
        count += fcount;
        document.getElementById(
          "Price"
        ).innerHTML = `Total Amount: Rs. ${count}`;
        let eliment = `<div class="contain" id="contt${
          arr[i - 1].id
        }" value="${bool}">
            <div class="semi-container">
              <span>${finalvau}</span>
            </div>
            <div class="addcart">
              <button onclick="removeCart(event)" id="${
                arr[i - 1].id
              }">Remove</button>
            </div>
            </div>`;
        document
          .getElementById("cartt")
          .insertAdjacentHTML("beforeend", eliment);
        break;
      } else {
        alert("item is already added!!");
      }
    }
  }
}
function removeCart(e) {
  debugger;
  bool = false;
  let value = e.target.id;
  for (let i = 0; i <= i; i++) {
    if (value == i) {
      $(`#contt${i}`).remove();
      let fcount = arr[i - 1].price;
      count -= fcount;
      document.getElementById("Price").innerHTML = `Total Amount: Rs. ${count}`;
      break;
    }
  }
}
function reSet() {
  debugger;
  count = 0;
  bool = false;
  document.getElementById("Price").innerHTML = `Total Amount: Rs. ${count}`;
  $("#cartt").find(".contain").remove();
}

function sorting() {
  debugger;
  arr.sort(function (arr0, arr1) {
    return arr0.price - arr1.price;
  });
  console.log(arr);
}
// Shoppig Code start END
