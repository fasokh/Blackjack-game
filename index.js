let cards = [];
let blackJack = false;
let isAlive = false;
let sum = 0;
let message = "";
let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
//let cardsEl = document.getElementById("cards-el");
let cardsEl = document.querySelector(".cards-el");

let player = {
  name: "Fatemeh",
  chips: 129,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let number = Math.floor(Math.random() * 13) + 1;
  if (number > 10) {
    return 10;
  } else if (number === 1) {
    return 11;
  } else {
    return number;
  }
}

let startGame = () => {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard]; //show all cards
  sum = firstCard + secondCard;
  renderGame();
};

let renderGame = () => {
  cardsEl.textContent = "Cards: ";

  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    isAlive = true;
  } else if (sum === 21) {
    message = "Wohoo! you've blak jacked!";
    blackJack = true;
  } else {
    message = "You are out of the game";
    isAlive = false;
  }

  messageEl.textContent = message;
};

let newCard = () => {
  if (blackJack === false && isAlive === true) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
};
