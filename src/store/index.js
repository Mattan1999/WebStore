import Vue from "vue";
import Vuex from "vuex";
import Data from "../../public/data.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    filteredProducts: [],
    products: Data.phones,
    searchQuery: null,
    wishList: []
  },
  mutations: {
    filterProductsByCategory(state, filteredProducts) {
      state.filteredProducts = filteredProducts;
      if (state.filteredProducts) {
        state.products = Data.phones.filter((product) => {
          return state.filteredProducts.find((c) => product.name.match(c));
        });
      } else {
        state.products = Data.phones;
      }
    },
    searchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
      if (state.searchQuery) {
        state.products = Data.phones.filter((product) => {
          return state.searchQuery
            .toLowerCase()
            .split(" ")
            .every((c) => product.name.toLowerCase().includes(c));
        });
      } else {
        state.products = Data.phones;
      }
    },
    addToCart(state, product) {
      if (state.cart.includes(product)) {
        console.log("producten finns redan");
      } else {
        state.cart.push(product);
      }
    },
    removeFromCart(state, product) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === product.id) {
          state.cart.splice(i, 1);
          break;
        }
      }
    },
    clearCart(state) {
      state.cart = [];
    },
    addToWishList(state, product) {
      state.wishList.push(product);
    },
    removeFromWishList(state, product) {
      console.log(state.wishList)
      for (let i = 0; i < state.wishList.length; i++) {
        if (state.wishList[i].id === product.id) {
          state.wishList.splice(i, 1);
        }
      }
    },
  },
  actions: {},
  modules: {},
});
