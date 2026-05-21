'use strict';

import { elements } from '../ui/elements.js';
import * as constants from '../shared/constants.js';

//Obtener la ruta de la imagen de una carta específica
export function getCardImage(card) {
  return `assets/card-${card.suit}-${card.value}.png`;
}

//Obtener la ruta de la imagen del diseño de la parte trasera de las cartas
export function getCardDesign() {
  return `assets/card-back-design.png`;
}

//Crear un elemento de carta para la interfaz de usuario
function createCardElement({ card, index, spread, hideDealerCard }) {
  const cardEl = document.createElement('div');
  cardEl.className = 'card-ui';
  cardEl.style.left = `${index * spread}px`;

  const img = document.createElement('img');

  if (hideDealerCard && index > 0) {
    img.src = getCardDesign();
  } else {
    img.src = getCardImage(card);
  }

  img.alt = 'Playing card';
  cardEl.appendChild(img);
  return cardEl;
}

//Renderizar las cartas en la mano del jugador o del dealer
export function renderHand({ hand, container, hideDealerCard = false }) {
  container.innerHTML = '';

  if (hand.length === 0) {
    container.style.width = '0px';
    return;
  }

  const CARD_WIDTH = 130;
  const spread = Math.min(30, 240 / hand.length);
  const totalWidth = spread * (hand.length - 1) + CARD_WIDTH;

  container.style.width = `${totalWidth}px`;

  hand.forEach((card, index) => {
    const cardElement = createCardElement({
      card,
      index,
      spread,
      hideDealerCard,
    });

    container.appendChild(cardElement);
  });
}

//Actualizar los puntajes en la interfaz de usuario
export function renderScores(playerScore, dealerScore) {
  elements.scorePlayer.textContent = playerScore;
  elements.scoreDealer.textContent = dealerScore;
}

export function renderGame({
  playerHand,
  dealerHand,
  playerScore,
  dealerScore,
  phase,
}) {
  renderScores(playerScore, dealerScore);

  renderHand({
    hand: playerHand,
    container: elements.playerHand,
    hideDealerCard: false,
  });

  renderHand({
    hand: dealerHand,
    container: elements.dealerHand,
    hideDealerCard: phase !== constants.GAME_PHASE.FINISHED,
  });
}

//Mostrar un mensaje de alerta con el resultado del juego
export function showMessage(message) {
  alert(message);
}
