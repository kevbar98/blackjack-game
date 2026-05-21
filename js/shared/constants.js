'use strict';

export const RESULT = {
  PLAYER: 'player',
  DEALER: 'dealer',
  DRAW: 'draw',
  NONE: null,
};

export const MESSAGE = {
  BLACKJACK_PLAYER: 'Player Blackjack!',
  BLACKJACK_DEALER: 'Dealer Blackjack!',
  BLACKJACK_DRAW: 'Blackjack Draw!',
  BUST_PLAYER: 'Player Busted!',
  BUST_DEALER: 'Dealer Busted!',
  WINNER_PLAYER: 'Player Wins!',
  WINNER_DEALER: 'Dealer Wins!',
  WINNER_DRAW: 'Draw!',
};

export const GAME_PHASE = {
  INITIAL: 'initial',
  PLAYING: 'playing',
  FINISHED: 'finished',
};

export const GAME_MESSAGES = {
  blackjack: {
    [RESULT.PLAYER]: MESSAGE.BLACKJACK_PLAYER,
    [RESULT.DEALER]: MESSAGE.BLACKJACK_DEALER,
    [RESULT.DRAW]: MESSAGE.BLACKJACK_DRAW,
  },

  bust: {
    [RESULT.PLAYER]: MESSAGE.BUST_PLAYER,
    [RESULT.DEALER]: MESSAGE.BUST_DEALER,
  },

  winner: {
    [RESULT.PLAYER]: MESSAGE.WINNER_PLAYER,
    [RESULT.DEALER]: MESSAGE.WINNER_DEALER,
    [RESULT.DRAW]: MESSAGE.WINNER_DRAW,
  },
};

export const GAME_CHECKS = {
  BLACKJACK: 'blackjack',
  BUST: 'bust',
  WINNER: 'winner',
};
