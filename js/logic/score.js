import { state } from '../core/state.js';

//Calcular puntaje
export function calculateScore(hand) {
  let score = 0;
  let aces = 0;

  for (const card of hand) {
    if (card.value > 10) {
      score += 10;
    } else if (card.value === 1) {
      score += 1;
      aces++;
    } else {
      score += card.value;
    }
  }
  while (aces > 0 && score + 10 <= 21) {
    score += 10;
    aces--;
  }
  return score;
}

export function updateScores() {
  state.player.score = calculateScore(state.player.hand);
  state.dealer.score = calculateScore(state.dealer.hand);
  state.player.busted = state.player.score > 21;
  state.dealer.busted = state.dealer.score > 21;
}
