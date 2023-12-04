// store/index.js
export const state = () => ({
  cart: [],
});

export const mutations = {
  addToCart(state, product) {
    state.cart.push(product);
  },
};
