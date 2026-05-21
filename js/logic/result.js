import { RESULT, GAME_MESSAGES, GAME_CHECKS } from '../shared/constants.js';
import { state } from '../core/state.js';

//Verificar Blackjack
export function checkBlackJack() {
  const playerBlackjack =
    state.player.score === 21 && state.player.hand.length === 2;

  const dealerBlackjack =
    state.dealer.score === 21 && state.dealer.hand.length === 2;

  if (playerBlackjack && dealerBlackjack) {
    return RESULT.DRAW;
  }

  if (playerBlackjack) {
    return RESULT.PLAYER;
  }

  if (dealerBlackjack) {
    return RESULT.DEALER;
  }

  return RESULT.NONE;
}

export function getBustResult() {
  if (state.player.busted) {
    return RESULT.PLAYER;
  }

  if (state.dealer.busted) {
    return RESULT.DEALER;
  }

  return RESULT.NONE;
}

export function checkWinner() {
  const playerScore = state.player.score;
  const dealerScore = state.dealer.score;

  if (state.player.busted) {
    return RESULT.DEALER;
  }

  if (state.dealer.busted) {
    return RESULT.PLAYER;
  }

  if (playerScore > dealerScore) {
    return RESULT.PLAYER;
  }

  if (dealerScore > playerScore) {
    return RESULT.DEALER;
  }

  return RESULT.DRAW;
}

export function resolveResult(type) {
  if (type === GAME_CHECKS.BLACKJACK) return checkBlackJack();
  if (type === GAME_CHECKS.BUST) return getBustResult();
  if (type === GAME_CHECKS.WINNER) return checkWinner();
}

export function getResultMessage(type, result) {
  return GAME_MESSAGES[type][result];
}
