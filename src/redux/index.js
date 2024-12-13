import { combineReducers } from 'redux';
import authReducer from './Reducers/AuthReducer';
import busReducer from './Reducers/busReducer';
import ticketReducer from './Reducers/ticketReducer';
import { purchaseTicketReducer, viewAvailableTicketsReducer, viewBusesReducer } from './Reducers/UserReducer';
import { busSeatReducer } from './Reducers/busSeatReducer';
import { busCartReducer } from './Reducers/busCartReducer';


const rootReducer = combineReducers({
  auth: authReducer, 
  bus: busReducer,
  ticket: ticketReducer,
  buses: viewBusesReducer,
  tickets:viewAvailableTicketsReducer,
  purchaseTicket:purchaseTicketReducer,
  busSeats: busSeatReducer,
  busCart: busCartReducer,


});

export default rootReducer;
