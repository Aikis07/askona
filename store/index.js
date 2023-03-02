import GetCategories from '~/API/getCategories.js';
import GetProducts from '~/API/getProducts.js';

export const state = () => ({
  categories: null,
  products: null,
  basket: [],
});

export const getters = {

};

export const mutations = {
  updateCategories(state, categories) {
    state.categories = categories;
  },
  updateProducts(state, products) {
    state.products = products;
  },
  addProductToBasket(state, payload) {
    state.basket.push(payload)
  },
  removeProduct(state, payload) {
    const id = state.basket.findIndex(f => f.id === payload)
    state.basket.splice(id, 1)
  }
};

export const actions = {
  async getCategories({ commit }) {
    const categories = await GetCategories.getCategories();
    commit('updateCategories', categories);
  },
  async getProducts({ commit }) {
    const products = await GetProducts.getProducts();
    commit('updateProducts', products);
  },
};
