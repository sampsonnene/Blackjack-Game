let suits = ['S', 'H', 'D', 'C']
var values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two']
let suitMap = {D : 'diamonds',
C : 'clubs',
H : 'hearts',
S : 'spades'}


let dealButton = document.getElementById('deal-button')
let hitButton = document.querySelector ('#hit-button')
let standButton = document.querySelector ('#stand-button')

let playerHand = []
let dealerHand = []

let dealerHandNode = document.getElementById('dealer-hand')
let playerHandNode = document.getElementById('player-hand')


function createCardObj(points, suit){
let card = {
    points: points,
    suit: suit
    }
    let imageURL = "";
if(points > 1 && points <=10){
    imageURL = `images/${points}_of_${suitMap[suit]}`

}
card.imageURL = imageURL;
return card;
}

switch(points){
    case 1:
        imageURL = `images/ace_of_${suitMap[suit]}`
        break;
    case 11:
        imageURL = `images/jack_of_${suitMap[suit]}`
            break;
    case 12:
        imageURL = `images/queen_of_${suitMap[suit]}`
                break;
    case 13:
        imageURL = `images/king_of_${suitMap[suit]}`
                    break;
}
card.imageURL = imageURL
return card



function buildDeck(){
suits.forEach(suit =>{
for(let points = 1; points<=13; points++){
    //create the 13 cards, and push to the card
cardDeck.push(createCardObj(points, suit))
    }
        })//end of forEach

}

var cards = []
function dealCards(){
    for (var a = 0; a <4; a++){
        cards.push(deck.pop())
    }

}

function displayPlayerCards(){
let htmlFragment = ""
playerHand.forEach(card =>{
let img = `<img src="${card.imageURL}">`
HTMLfRAMGNET += img;
})
dealerHandNode.innerHTML = htmlFragment 
}

function displayDealerCards(){

}




dealButton.addEventListener('click', ()=>{
    cardDeck = [];
    buildDeck();

playerHand.push(carDeck.pop())
playerHand.push(carDeck.pop())

console.log(playerHand)
console.log(dealerHand)

console.log(cardDeck)
})

hitButton.addEventListener('click', ()=>{
    
    console.log('hit button')
})

standButton.addEventListener('click', ()=>{

    console.log('stand button')
})

