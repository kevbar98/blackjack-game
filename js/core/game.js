'use strict';

import { state } from '../core/state.js';
import { GAME_PHASE } from '../shared/constants.js';
import {
  createDeck,
  shuffleDeck,
  dealCard,
  dealInitialCards,
} from '../logic/deck.js';
import { updateScores } from '../logic/score.js';

//Iniciar juego
export function startGame() {
  state.player.hand = [];
  state.dealer.hand = [];
  state.player.passed = false;
  state.dealer.passed = false;
  state.phase = GAME_PHASE.PLAYING;
  state.deck = createDeck();
  state.deck = shuffleDeck(state.deck);

  const { playerHand, dealerHand } = dealInitialCards(state.deck);

  state.player.hand = playerHand;
  state.dealer.hand = dealerHand;
  updateScores();
}

//Jugador pide carta
export function playerDraw() {
  const card = dealCard(state.deck);
  state.player.hand.push(card);
  updateScores();
}

//Jugador pasa
export function playerPass() {
  state.player.passed = true;
}

//Turno del dealer
export function dealerTurn() {
  while (state.dealer.score < 17) {
    const card = dealCard(state.deck);
    state.dealer.hand.push(card);
    updateScores();
  }
}

//Terminar juego
export function finishGame() {
  state.phase = GAME_PHASE.FINISHED;
}

//Verificar si el juego ha terminado
export function isGameFinished() {
  return state.phase === GAME_PHASE.FINISHED;
}

//Obtener estado del juego
export function getState() {
  return state;
}

//Obtener estado para la UI
export function getUIState() {
  return {
    playerHand: state.player.hand,
    dealerHand: state.dealer.hand,
    playerScore: state.player.score,
    dealerScore: state.dealer.score,
    phase: state.phase,
  };
}
