//Variable to hold your card
let yourCard = "";

//Arrays for Cards
let rank = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
let suit = ["♥", "♦", "♣", "♠"];

//Array to hold deck of cards
let deck = [];

//Get the span that holds the card
let cardText = document.getElementById("card");

//Populate the deck of cards
for (let i = 0; i < suit.length; i++) {
  for (let j = 0; j < rank.length; j++) {
    deck.push(rank[j] + " " + suit[i]);
  }
}

//Push the button, get a card
function getCard() {
  let x = Math.floor(Math.random() * 52);
  document.getElementById("yourCard").style.display = "block";
  shuffle(deck);
  cardText.innerHTML = `Your hand is: ${deck[0]}, ${deck[1]}, ${deck[2]}, ${
    deck[3]
  }, and ${deck[4]}`;
}

//function to shuffle the cards
function shuffle(array) {
  let j, x, i;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array[i];
    array[i] = array[j];
    array[j] = x;
  }
  return array;
}
