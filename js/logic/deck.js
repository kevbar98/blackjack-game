//Crear deck / mazo
export function createDeck() {
  const deck = [];
  for (let suit = 1; suit <= 4; suit++) {
    for (let value = 1; value <= 13; value++) {
      deck.push({ suit, value });
    }
  }
  return deck;
}

//Mezclar el mazo
export function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

//Dar carta
export function dealCard(deck) {
  return deck.pop();
}

//Repartir cartas iniciales
export function dealInitialCards(deck) {
  const playerHand = [];
  const dealerHand = [];
  for (let i = 0; i < 4; i++) {
    if (i % 2 === 0) {
      playerHand.push(dealCard(deck));
    } else {
      dealerHand.push(dealCard(deck));
    }
  }
  return {
    playerHand,
    dealerHand,
  };
}
