import { ADD_SEAT_TO_CART, REMOVE_SEAT_FROM_CART, CLEAR_CART } from "../Types/Types";

// busCartReducer.js
const initialState = {
    cart: [],
  };
  
  export const busCartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_SEAT_TO_CART:
        return {
          ...state,
          cart: [...state.cart, action.payload], // Add the full seat object to the cart
        };
      case REMOVE_SEAT_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter(seat => seat.seatNumber !== action.payload), // Remove by seatNumber
        };
        case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
      default:
        return state;
    }
  };
  
   
  