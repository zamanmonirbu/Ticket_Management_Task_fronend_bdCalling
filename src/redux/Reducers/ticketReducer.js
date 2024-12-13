// src/reducers/ticketReducer.js

import { GET_TICKET_ERROR , ADD_TICKET, UPDATE_TICKET, DELETE_TICKET} from "../Types/Types";


const initialState = {
  tickets: [],
  error: null,
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TICKET:
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
      };
    case UPDATE_TICKET:
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket._id === action.payload._id ? action.payload : ticket
        ),
      };
    case DELETE_TICKET:
      return {
        ...state,
        tickets: state.tickets.filter((ticket) => ticket._id !== action.payload),
      };
    case GET_TICKET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ticketReducer;
