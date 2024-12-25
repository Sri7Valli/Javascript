// let buttons = document
//   .querySelector(".js-button")
//   .classList.contains("js-button");
// console.log(buttons);

// function gamingButton() {
//   let game = document.querySelector(".gameButton");

//   if (!game.classList.contains("colour")) {
//     game.classList.add("colour");
//   } else {
//     game.classList.remove("colour");
//   }

//   if (game.classList.contains(".gameButton")) {
//     game.classList.remove("colour");
//   } else {
//     game.classList.add("colour");
//   }
// }

// function switches() {
//   let happiness = document.querySelector(".musicButton");
//   if (!happiness.classList.contains("switched")) {
//     turnOffButton();
//     happiness.classList.add("switched");
//   } else {
//     happiness.classList.remove("switched");
//   }

//   let joy = document.querySelector(".pizzaButton");
//   if (!joy.classList.contains("switched")) {
//     turnOffButton();
//     joy.classList.add("switched");
//   } else {
//     joy.classList.remove("switched");
//   }

//   let laugh = document.querySelector(".peaceButton");

//   if (!laugh.classList.contains("switched")) {
//     turnOffButton();
//     laugh.classList.add("switched");
//   } else {
//     laugh.classList.remove("switched");
//   }
// }

// function turnOffButton() {
//   let previousButton = document.querySelector(".switched");

//   if (previousButton) {
//     previousButton.classList.remove("switched");
//   }
// }

greet(peru, (greeting = `Hello ${peru}`));

{
  console.log(greeting);
}

greet("Alice");
