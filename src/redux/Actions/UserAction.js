import axios from 'axios';
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



// View all buses action
export const viewBuses = () => async (dispatch) => {
  try {
    dispatch({ type: VIEW_BUSES_REQUEST });
    const { data } = await axios.get('/api/user/buses');
    dispatch({ type: VIEW_BUSES_SUCCESS, payload: data.buses });
  } catch (error) {
    dispatch({
      type: VIEW_BUSES_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

// View available tickets action
export const viewAvailableTickets = (busId) => async (dispatch) => {
  try {
    dispatch({ type: VIEW_TICKETS_REQUEST });
    const { data } = await axios.get('/api/user/tickets', { params: { busId } });
    dispatch({ type: VIEW_TICKETS_SUCCESS, payload: data.tickets });
  } catch (error) {
    dispatch({
      type: VIEW_TICKETS_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

// Purchase ticket action
export const purchaseTicket = (ticketId) => async (dispatch, getState) => {
  try {
    dispatch({ type: PURCHASE_TICKET_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post('/api/user/tickets/purchase', { ticketId }, config);
    dispatch({ type: PURCHASE_TICKET_SUCCESS, payload: data.ticket });
  } catch (error) {
    dispatch({
      type: PURCHASE_TICKET_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
