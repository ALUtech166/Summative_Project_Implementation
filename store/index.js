// store/index.js

export const state = () => ({
  cart: [],
  waitlistedProducts: [], // Add the waitlistedProducts array to the state
});
export const getters = {
  waitlistedProductsCount: (state) => state.waitlistedProducts.length,
};
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

  removeFromWaitlist(state, index) {
    state.waitlistedProducts.splice(index, 1);
  },

  addToWaitlist(state, product) {
    const existingProduct = state.waitlistedProducts.find(
      (p) => p.id === product.id
    );

    if (existingProduct) {
      // If the product is already in the waitlist, you can update its quantity or take other actions
      existingProduct.quantity++;
    } else {
      // If the product is not in the waitlist, add it with a quantity of 1
      state.waitlistedProducts.push({ ...product, quantity: 1 });
    }
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

  removeFromWaitlist({ commit }, index) {
    commit("removeFromWaitlist", index);
  },

  addToWaitlist({ commit }, product) {
    commit("addToWaitlist", product);
  },
};
