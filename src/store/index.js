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
      if (state.filteredProducts.length > 0 && !state.searchQuery) {
        state.products = Data.phones.filter((product) => {
          return state.filteredProducts.find((c) => product.name.match(c));
        });
      } else {
        if(!state.searchQuery){
          state.products = Data.phones;
        }else{
          state.products = Data.phones.filter((product) => {
            return state.searchQuery
              .toLowerCase()
              .split(" ")
              .every((c) => product.name.toLowerCase().includes(c));
          });
        }
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
        if(state.filteredProducts < 1){
          state.products = Data.phones;
        }else{
          state.products = Data.phones.filter((product) => {
            return state.filteredProducts.find((c) => product.name.match(c));
          });
        }
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
    addToWishList(state, product) {
      state.wishList.push(product);
      console.log(state.wishList.length)
    },
    clearCart(state) {
      state.cart = [];
    },
  },
  actions: {},
  modules: {},
});
