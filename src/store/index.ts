import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

export interface State {
  menuBurger: boolean;
}

// create key
export const key: InjectionKey<Store<State>> = Symbol('root-store');

export const store = createStore<State>({
  state: {
    menuBurger: false,
  },
  mutations: {
    CHANGE_BURGER: (state, isShow) => {
      state.menuBurger = isShow;
    },
  },
  actions: {
    toggleBurger({ commit }, isShow) {
      commit('CHANGE_BURGER', isShow);
    },
  },
  getters: {
    menuBurger: (state) => state.menuBurger,
  },
});
