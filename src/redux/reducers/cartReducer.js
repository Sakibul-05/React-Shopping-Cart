// cartReducer.js
const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Check if the item is already in the cart
        if (state.cartItems.find(item => item.id === action.payload.id)) {
          return state;
        }
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      case 'REMOVE_FROM_CART':
        return {
          ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload),
        };
      case 'CHECKOUT':
        return { ...state, cartItems: [] };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  