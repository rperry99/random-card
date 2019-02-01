//Arrays for Cards
let rank = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
let suit = ["Hearts", "Diamonds", "Clubs", "Spades"];

//Array to hold deck of cards
let deck = [];

//Get the span that holds the card
let cardText = document.getElementById("card");

//Populate the deck of cards
for (let i = 0; i < suit.length; i++) {
  for (let j = 0; j < rank.length; j++) {
    deck.push(rank[j] + " of " + suit[i]);
  }
}

//Push the button, get a card
function getCard() {
  let hand = [];
  let handRanks = [];
  let handSuits = [];
  let handText;
  shuffle(deck);
  for (let i = 0; i < 5; i++) {
    hand.push(deck[i]);
    if (deck[i][0] == 1) {
      handRanks.push("10");
    } else {
      handRanks.push(deck[i][0]);
    }
    handSuits.push(deck[i][5]);
  }
  whatsYourHand(handRanks, handSuits);
  handText = hand.join(", ");
  cardText.style.display = "block";
  cardText.innerHTML = `Your hand is: ${handText}`;
}

function whatsYourHand(rank, suits) {
  rank.sort();
  suits.sort();
  console.log(rank, suit);
  // 1. Royal Flush
  // 2. Straight Flush
  // 3. 4 Of A Kind
  // 4. Full House
  // 5. Flush
  // 6. Straight
  // 7. 3 of a kind
  // 8. 2 Pair
  // 9. Pair
  // 10. High Card
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
