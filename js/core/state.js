'use strict';

export const state = {
  deck: [],

  player: {
    hand: [],
    score: 0,
    passed: false,
    busted: false,
  },

  dealer: {
    hand: [],
    score: 0,
    passed: false,
    busted: false,
  },

  phase: 'initial',
};
