import { defineStore } from 'pinia';
import actions from './actions';
import getters from './getters';
import state from './state.js';

export const metrics = defineStore('metrics', {
  actions,
  getters,
  state
});
