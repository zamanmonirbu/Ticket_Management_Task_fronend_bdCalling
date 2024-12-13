// reducers.js
import {
    VIEW_BUSES_REQUEST,
    VIEW_BUSES_SUCCESS,
    VIEW_BUSES_FAILURE,
    VIEW_TICKETS_REQUEST,
    VIEW_TICKETS_SUCCESS,
    VIEW_TICKETS_FAILURE,
    PURCHASE_TICKET_REQUEST,
    PURCHASE_TICKET_SUCCESS,
    PURCHASE_TICKET_FAILURE,
  } from '../Types/Types';

  
  // Initial state for buses
  const initialBusesState = {
    loading: false,
    buses: [],
    error: null,
  };
  
  // View Buses Reducer
  export const viewBusesReducer = (state = initialBusesState, action) => {
    switch (action.type) {
      case VIEW_BUSES_REQUEST:
        return { ...state, loading: true };
      case VIEW_BUSES_SUCCESS:
        return { loading: false, buses: action.payload, error: null };
      case VIEW_BUSES_FAILURE:
        return { loading: false, error: action.payload, buses: [] };
      default:
        return state;
    }
  };
  
  // Initial state for tickets
  const initialTicketsState = {
    loading: false,
    tickets: [],
    error: null,
  };
  
  // View Available Tickets Reducer
  export const viewAvailableTicketsReducer = (state = initialTicketsState, action) => {
    switch (action.type) {
      case VIEW_TICKETS_REQUEST:
        return { ...state, loading: true };
      case VIEW_TICKETS_SUCCESS:
        return { loading: false, tickets: action.payload, error: null };
      case VIEW_TICKETS_FAILURE:
        return { loading: false, error: action.payload, tickets: [] };
      default:
        return state;
    }
  };
  
  // Initial state for ticket purchase
  const initialPurchaseTicketState = {
    loading: false,
    success: false,
    ticket: null,
    error: null,
  };
  
  // Purchase Ticket Reducer
  export const purchaseTicketReducer = (state = initialPurchaseTicketState, action) => {
    switch (action.type) {
      case PURCHASE_TICKET_REQUEST:
        return { ...state, loading: true, success: false };
      case PURCHASE_TICKET_SUCCESS:
        return { loading: false, success: true, ticket: action.payload, error: null };
      case PURCHASE_TICKET_FAILURE:
        return { loading: false, success: false, error: action.payload };
      default:
        return state;
    }
  };
  