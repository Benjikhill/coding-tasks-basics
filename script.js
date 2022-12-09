const { is } = require("cypress/types/bluebird");

Day1;

console.log(0 + ((10 - 5) * 8) / 2);

console.log((600 + 510) / 2);

console.log("333" === 333);

console.log(50 + 2 >= 52);

console.log(!true);

console.log("B" + "e" + "n" + "j" + "a" + "m" + "i" + "n");

console.log(1 + 1);

console.log("test" !== "TEST");

const favoriteName = "Alexander Eder";
const favoriteSong = "Für diesen Moment";

let myFavoriteSong = `${favoriteSong}, ${favoriteName}`;
console.log(myFavoriteSong);

let currentUsers;
currentUsers = 1;
currentUsers += 1;
currentUsers += 1;
console.log(currentUsers);

Day2;

console.log(25 / 5 === 5 && 50 / 10 === 5);

let isActive = true;
isActive = !isActive;

function welcome(greeting, userName) {
  if (typeof greeting === "string" && typeof userName === "string") {
    return greeting + " " + userName;
  } else {
    return "Hello Guest.";
  }
}

console.log(welcome("Hi", "Max"));
console.log(welcome("Welcome", "Frank"));
console.log(welcome("Servus", "Jan"));

let fullName = "";

function setFirstName(firstName) {
  if (typeof firstName === "string") {
    return fullName;
  }
}

function setLastName(lastName) {
  if (typeof lastName === "string") {
    return fullName;
  }
}

function getFullName() {
  setFirstName(firstName);
  setLastName(lastName);
}

console.log(getFullName("Benny", "Hill"));
