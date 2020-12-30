export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    // pushes items to basket
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    // removes items from basket. not most efficient method
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let nBasket = [...state.basket];

      if (index >= 0) {
        nBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove item with (id: $action.id)... item not in basket?`
        );
      }

      return {
        ...state,
        basket: nBasket,
      };

    default:
      return state;
  }
};

export default reducer;
