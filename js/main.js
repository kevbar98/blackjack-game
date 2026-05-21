'use strict';

import { showMessage, renderGame } from './ui/ui.js';
import * as game from './core/game.js';
import { GAME_CHECKS, RESULT } from './shared/constants.js';
import { elements } from './ui/elements.js';
import { resolveResult, getResultMessage } from './logic/result.js';

elements.btnNew.addEventListener('click', handleNewGame);
elements.btnDraw.addEventListener('click', handlePlayerDraw);
elements.btnPass.addEventListener('click', handlePlayerPass);

function handleNewGame() {
  game.startGame();
  renderGame(game.getUIState());
}

function handlePlayerDraw() {
  if (game.isGameFinished()) return;
  game.playerDraw();
  syncGame(GAME_CHECKS.BUST);
}

function handlePlayerPass() {
  if (game.isGameFinished()) return;
  game.playerPass();
  game.dealerTurn();
  syncGame(GAME_CHECKS.WINNER);
}

function syncGame(type) {
  renderGame(game.getUIState());
  const result = resolveResult(type);
  if (result === RESULT.NONE) return;
  game.finishGame();
  showMessage(getResultMessage(type, result));
}
