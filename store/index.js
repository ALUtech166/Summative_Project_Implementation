// store/index.js

export const state = () => ({
  cart: [],
});

export const mutations = {
  incrementQuantity(state, index) {
    // Vue's reactivity will handle the changes automatically
    state.cart[index].quantity++;
  },
  decrementQuantity(state, index) {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--;
    }
  },
  addToCart(state, item) {
    const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      state.cart.push({ ...item, quantity: 1 });
    }
  },
  removeFromCart(state, index) {
    state.cart.splice(index, 1);
  },
};

export const actions = {
  incrementQuantity({ commit }, index) {
    commit("incrementQuantity", index);
  },
  decrementQuantity({ commit }, index) {
    commit("decrementQuantity", index);
  },
  addToCart({ commit }, item) {
    commit("addToCart", item);
  },
  removeFromCart({ commit }, index) {
    commit("removeFromCart", index);
  },
};
