import { BOOK_SEAT_FAILURE,  FETCH_BOOKED_SEATS_REQUEST, 
    FETCH_BOOKED_SEATS_SUCCESS, 
    FETCH_BOOKED_SEATS_FAILURE, 
    BOOK_SEAT_REQUEST, 
    BOOK_SEAT_SUCCESS, } from '../Types/Types';
  
  
  const initialState = {
    loading: false,
    bookedSeats: [],
    error: null,
  };
  
  export const busSeatReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BOOKED_SEATS_REQUEST:
        return { ...state, loading: true };
  
      case FETCH_BOOKED_SEATS_SUCCESS:
        return { ...state, loading: false, bookedSeats: action.payload };
  
      case FETCH_BOOKED_SEATS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      case BOOK_SEAT_REQUEST:
        return { ...state, loading: true };
  
      case BOOK_SEAT_SUCCESS:
        return { 
          ...state, 
          loading: false, 
          bookedSeats: [...state.bookedSeats, action.payload] // Add newly booked seat 
        };
  
      case BOOK_SEAT_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  