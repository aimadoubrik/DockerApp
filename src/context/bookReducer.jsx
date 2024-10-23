export const bookReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_BOOK':
        return [...state, action.payload];
  
      case 'UPDATE_BOOK':
        return state.map((book) =>
          book.isbn === action.payload.isbn ? action.payload : book
        );
  
      case 'DELETE_BOOK':
        return state.filter((book) => book.isbn !== action.payload);
  
      default:
        return state;
    }
  };
  