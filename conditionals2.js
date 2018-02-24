//Get age and convert it to a number!!!
var age = Number(prompt("What is your age?"));

//If age is negative
if (age < 0){
  console.log("You did not enter a valid age : )");
}
else if (age == 21) {
  console.log("Happy 21st Birthday!");
}
//If age is odd, does not evenly divide by 2
else if (age % 2 === 1) {
  console.log("Your age is odd!");
}

///If it is a percect square
else if (age % Math.sqrt(age) === 0 ) {
  console.log("Your age is a perfect square");

}
else {
  console.log("you are this old!" + age);
}
