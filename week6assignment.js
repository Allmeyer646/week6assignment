/* ===================card data========================= */

const cardRank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE']; // Add a rank of '1' to cause the unit test to fail, to test the test function
const suit = ['HEARTS', 'CLUBS', 'DIAMONDS', 'SPADES'];  
const rankValueMap = {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'JACK': 11, 'QUEEN': 12, 'KING': 13, 'ACE': 14} 
 

/* ===================================================== */


class Card {
    constructor(cardRank, suit) {
        this.cardRank = cardRank;
        this.suit = suit;               
    }
}

/* ===================================================== */

class Deck {
    constructor(cards = wholeDeck()) {
        this.cards = cards;
    }

    get fullDeck() {
        return this.cards.length;
    }

    pop() {
        return this.cards.shift()
    }
    
    shuffleCards() {
        for (let i = this.fullDeck - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = this.cards[j];
            this.cards[j] = this.cards[i];
            this.cards[i] = temp;
        }
    }
}

/* ===================================================== */

class Player {
    constructor (name){
        this.name = name;
        this.score = 0;
    }
}

/* ===================================================== */

function wholeDeck() {
    return suit.flatMap(suit => {
        return cardRank.map(cardRank => {
            return new Card(cardRank, suit);
        })
    })
}

//console.log(wholeDeck());                                   //for unit testing

const deck = new Deck();
let drewsHand
let jasonsHand


pregameCeremonies()
function pregameCeremonies() {
    deck.shuffleCards();
    //console.log(deck.cards);                                //this shows the current version of a shuffled deck in the console.  
    //console.log(deck.cards[0]);                             //another check, on refresh this should always be a new card
    const halfDeck = deck.fullDeck / 2;                       //cuts the shuffled deck in half
    drewsHand = new Deck (deck.cards.slice(0, halfDeck));
    jasonsHand = new Deck (deck.cards.slice(halfDeck, deck.fullDeck));    
}

let playerOne = new Player('Drew');
console.log(playerOne);
let playerTwo = new Player('Jason');
console.log(playerTwo);


function playWar() {
    for (let i = 0; i < 26; i++) {
        let drewsCard = drewsHand.pop();
        let jasonsCard = jasonsHand.pop();
        console.log(`ROUND ${i + 1}: Drew plays the ${drewsCard.cardRank} OF ${drewsCard.suit} against Jason's ${jasonsCard.cardRank} OF ${jasonsCard.suit}`);
        if (rankValueMap[drewsCard.cardRank] > rankValueMap[jasonsCard.cardRank]) {
            console.log(`Drew won ROUND ${i + 1}`);
            playerOne.score++;
        } else if (rankValueMap[drewsCard.cardRank] < rankValueMap[jasonsCard.cardRank]) {
            console.log(`Jason won ROUND ${i + 1}`);
            playerTwo.score++
        } else {
            console.log (`ROUND ${i + 1} is tied`);
        }
    }
    console.log(playerOne.name + "'s score is " + playerOne.score);
    console.log(playerTwo.name + "'s score is " + playerTwo.score);
    if (playerOne.score > playerTwo.score) {
        alert(`In this game of War, the final score is ${playerOne.name}: ${playerOne.score}, ${playerTwo.name}: ${playerTwo.score}` + '\n' + `${playerOne.name} has won the war.`);
    } else if (playerOne.score < playerTwo.score) {
        alert(`In this game of War, the final score is ${playerOne.name}: ${playerOne.score}, ${playerTwo.name}: ${playerTwo.score}` + '\n' + `${playerTwo.name} has won the war.`);
    } else {
        alert(`In this game of War, the final score is ${playerOne.name}: ${playerOne.score}, ${playerTwo.name}: ${playerTwo.score}` + '\n' + `The war has become a stalemate.`);
    }
}

playWar()