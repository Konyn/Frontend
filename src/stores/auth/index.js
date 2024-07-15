import { defineStore } from 'pinia';
import actions from './actions';
import getters from './getters';
import state from './state.js';

export const auth = defineStore('auth', {
  actions,
  getters,
  state,
  persist: {
    key: 'user',
    paths: ['user.email', 'user.token']
  }
});
