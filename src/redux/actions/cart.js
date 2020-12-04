import {
  ADD_PIZZA_CART,
  CLEAR_CART,
  MINUS_ITEM,
  PLUS_ITEM,
  REMOVE_CART_ITEM,
} from "./types";

export const addPizzaToCart = (pizzaObj) => ({
  type: ADD_PIZZA_CART,
  payload: pizzaObj,
});

export const clearCart = {
  type: CLEAR_CART,
};

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id,
});

export const plusCartItem = (id) => ({
  type: PLUS_ITEM,
  payload: id,
});

export const minusCartItem = (id) => ({
  type: MINUS_ITEM,
  payload: id,
});
