let userName = prompt("Please Enter your Name!!");
let age = Number(prompt("Please Enter your Age!!"));
let agedes = "age is :";
let thanksmsg = "Thanks for Answering";
let subscrib;
let lisence;
let finalage = 0;
let totalAge = 0;
if (
  userName != undefined &&
  userName != null &&
  age != undefined &&
  age != null &&
  age != "NaN"
) {
  Result(userName.toUpperCase(), age);
} else {
  alert("Please Enter Valid Details!!");
}
function Result(userName, age) {
  debugger;
  totalAge = totalAge + age;
  if (age > 18) {
    lisence = "You will get Driving License";
    subscrib = "Please Subscribe to our channel";
  } else {
    finalage = 18 - age;
  }
  console.log(`${userName} ${agedes} ${age}
${userName}, ${
    lisence || `You need to wait ${finalage} more years to get driving license`
  }
${`Current total Age is : ${totalAge}`}
${thanksmsg}
${subscrib || ""}`);
}
