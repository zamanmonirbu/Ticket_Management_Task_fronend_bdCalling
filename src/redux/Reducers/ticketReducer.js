// src/reducers/ticketReducer.js

// import { GET_TICKET_ERROR , ADD_TICKET, UPDATE_TICKET, DELETE_TICKET} from "../Types/Types";


// const initialState = {
//   tickets: [],
//   error: null,
// };

// const ticketReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TICKET:
//       return {
//         ...state,
//         tickets: [...state.tickets, action.payload],
//       };
//     case UPDATE_TICKET:
//       return {
//         ...state,
//         tickets: state.tickets.map((ticket) =>
//           ticket._id === action.payload._id ? action.payload : ticket
//         ),
//       };
//     case DELETE_TICKET:
//       return {
//         ...state,
//         tickets: state.tickets.filter((ticket) => ticket._id !== action.payload),
//       };
//     case GET_TICKET_ERROR:
//       return {
//         ...state,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default ticketReducer;



const initialState = {
  tickets: [],
  ticket: null,
  loading: false,
  error: null,
};

 const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TICKET_REQUEST':
    case 'GET_TICKETS_REQUEST':
    case 'GET_TICKET_BY_ID_REQUEST':
    case 'UPDATE_TICKET_REQUEST':
    case 'DELETE_TICKET_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'ADD_TICKET_SUCCESS':
      return {
        ...state,
        loading: false,
        tickets: [...state.tickets, ...action.payload.tickets],
      };

    case 'GET_TICKETS_SUCCESS':
      return {
        ...state,
        loading: false,
        tickets: action.payload,
      };

    case 'GET_TICKET_BY_ID_SUCCESS':
      return {
        ...state,
        loading: false,
        ticket: action.payload,
      };

    case 'UPDATE_TICKET_SUCCESS':
      return {
        ...state,
        loading: false,
        tickets: state.tickets.map((ticket) =>
          ticket._id === action.payload._id ? action.payload : ticket
        ),
      };

    case 'DELETE_TICKET_SUCCESS':
      return {
        ...state,
        loading: false,
        tickets: state.tickets.filter((ticket) => ticket._id !== action.payload),
      };

    case 'ADD_TICKET_FAIL':
    case 'GET_TICKETS_FAIL':
    case 'GET_TICKET_BY_ID_FAIL':
    case 'UPDATE_TICKET_FAIL':
    case 'DELETE_TICKET_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};


export default ticketReducer;
