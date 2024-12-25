function diceGame() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  // let imageDice = `dice${randomNumber1}.png`;
  // let sourceImage = `dice-images/${imageDice}`;
  let imageDice1 = `../dice-images/dice${randomNumber1}.png`;
  let image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", imageDice1);

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  // let imageDice2 = `dice${randomNumber2}.png`;
  // let sourceImage2 = `dice-images/${imageDice2}`;
  let imageDice2 = `../dice-images/dice${randomNumber2}.png`;
  let image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", imageDice2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = `👏 Player 1 Wins !`;
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = `Player 2 Wins 👏`;
  } else {
    document.querySelector("h1").innerHTML = `Draw 😂`;
  }
}
diceGame();

// ../dice-images/dice6.png
