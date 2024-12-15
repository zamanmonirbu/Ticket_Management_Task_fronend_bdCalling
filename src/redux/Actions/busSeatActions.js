// src/redux/actions/busSeatActions.js
import axiosInstance from '../Api/AxiosInstace';
import { ADD_SEAT_TO_CART, BOOK_SEAT_FAILURE, BOOK_SEAT_REQUEST, BOOK_SEAT_SUCCESS, CLEAR_CART, FETCH_BOOKED_SEATS_FAILURE, FETCH_BOOKED_SEATS_REQUEST, FETCH_BOOKED_SEATS_SUCCESS, REMOVE_SEAT_FROM_CART } from '../Types/Types';




// **Fetch Booked Seats Action**
export const fetchBookedSeats = (busId) => async (dispatch) => {
  dispatch({ type: FETCH_BOOKED_SEATS_REQUEST });
  try {
    const response = await axiosInstance.get(`/user/booked-seats/${busId}`);
    dispatch({ type: FETCH_BOOKED_SEATS_SUCCESS, payload: response.data.bookedSeats });
  } catch (error) {
    dispatch({ type: FETCH_BOOKED_SEATS_FAILURE, payload: error.message });
  }
};

// https://ticket-management-task-fronend-bd-calling.vercel.app/

// **Book a Seat Action**
export const bookSeat = (bookingData) => async (dispatch) => {
  console.log(bookingData)
  dispatch({ type: BOOK_SEAT_REQUEST });
  try {
     await axiosInstance.post('/user/book-seat', bookingData);
    dispatch({ type: BOOK_SEAT_SUCCESS, payload: 2 }); 
  } catch (error) {
    console.log(error)
    dispatch({ type: BOOK_SEAT_FAILURE, payload: error.message });
  }
};


// busSeatActions.js
export const addSeatToCart = (seat) => ({
    type: ADD_SEAT_TO_CART,
    payload: seat, // seat will now be an object { seatNumber, money, busId }
  });
  
  export const removeSeatFromCart = (seatNumber) => ({
    type: REMOVE_SEAT_FROM_CART,
    payload: seatNumber, // Only seatNumber is required to remove the seat
  });
  
  
  // Action to clear cart
  export const clearCart = () => ({
    type: CLEAR_CART,
  });