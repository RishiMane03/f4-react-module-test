
import { FETCH_POST_SUCCESS,FETCH_POST_FAILURE,FETCH_POST_STARTED,ADD_TO_CART,REMOVE_FROM_CART,CHECKOUT } from "../actions/actionTypes";

const initialState = {
    loading: false,
    post: [],
    error: null,
    cart: [],
  };
  
  function homeReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_POST_STARTED:
        return { ...state, loading: true };
  
      case FETCH_POST_SUCCESS:
        return { ...state, loading: false, post: action.payload, error: null };
  
      case FETCH_POST_FAILURE:
        return { ...state, loading: false, post: [], error: action.payload };
  
      case ADD_TO_CART:
        const isProductInCart = state.cart.some((item) => item.id === action.payload.id);
  
        if (!isProductInCart) {
          return { ...state, cart: [...state.cart, action.payload] };
        } else {
          console.log("Product is already in the cart");
          return state;
        }

      case REMOVE_FROM_CART:
        const updatedCart = state.cart.filter((item) => item.id !== action.payload);
        return { ...state, cart: updatedCart };

      case CHECKOUT:
         return { ...state, cart: [] };

  
      default:
        return state;
    }
  }
  
  export default homeReducer;

