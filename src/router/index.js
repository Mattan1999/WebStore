import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import WishList from "../views/WishList.vue";
import DetailedProduct from "../views/DetailedProduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/cart/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/wishlist",
    name: "WishList",
    component: WishList,
  },
  {
    path: "/product/:product",
    name: "DetailedProduct",
    component: DetailedProduct,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
