import axiosInstance from '../Api/AxiosInstace';
import { ADD_BUS, DELETE_BUS, GET_ALL_BUSES, GET_BUS_ERROR, UPDATE_BUS, GET_BUS_BY_ID } from '../Types/Types';



export const addBus = (busData) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/admin/bus', busData);
    dispatch({
      type: ADD_BUS,
      payload: response.data.bus,
    });
  } catch (error) {
    dispatch({
      type: GET_BUS_ERROR,
      payload: error.message,
    });
  }
};

// Update Bus
export const updateBus = (id, busData) => async (dispatch) => {
  try {
    const response = await axiosInstance.put(`/admin/bus/${id}`, busData);
    dispatch({
      type: UPDATE_BUS,
      payload: response.data.updatedBus,
    });
  } catch (error) {
    dispatch({
      type: GET_BUS_ERROR,
      payload: error.message,
    });
  }
};

// Delete Bus
export const deleteBus = (id) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/admin/bus/${id}`);
    dispatch({
      type: DELETE_BUS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: GET_BUS_ERROR,
      payload: error.message,
    });
  }
};

// Get all Buses
export const getBuses = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/admin/buses');
    dispatch({
      type: GET_ALL_BUSES,
      payload: response.data.buses,
    });
  } catch (error) {
    dispatch({
      type: GET_BUS_ERROR,
      payload: error.message,
    });
  }
};

// Get specific Bus by ID
export const getSpecificBus = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/admin/bus/${id}`);
    dispatch({
      type: GET_BUS_BY_ID,
      payload: response.data.foundBus,
    });
  } catch (error) {
    dispatch({
      type: GET_BUS_ERROR,
      payload: error.message,
    });
  }
};


// // Add Ticket
// export const addTicket = (ticketData) => async (dispatch) => {
//   try {
//     const response = await axiosInstance.post('/admin/ticket', ticketData);
//     dispatch({
//       type: ADD_TICKET,
//       payload: response.data.newTicket,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_TICKET_ERROR,
//       payload: error.message,
//     });
//   }
// };

// // Update Ticket
// export const updateTicket = (id, ticketData) => async (dispatch) => {
//   try {
//     const response = await axiosInstance.put(`/admin/ticket/${id}`, ticketData);
//     dispatch({
//       type: UPDATE_TICKET,
//       payload: response.data.updatedTicket,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_TICKET_ERROR,
//       payload: error.message,
//     });
//   }
// };

// // Delete Ticket
// export const deleteTicket = (id) => async (dispatch) => {
//   try {
//     await axiosInstance.delete(`/admin/ticket/${id}`);
//     dispatch({
//       type: DELETE_TICKET,
//       payload: id,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_TICKET_ERROR,
//       payload: error.message,
//     });
//   }
// };




// Action to add a ticket
export const addTicket = (ticketData) => async (dispatch) => {
  try {
    dispatch({ type: 'ADD_TICKET_REQUEST' });
    const { data } = await axiosInstance.post('/admin/ticket', ticketData);
    dispatch({ type: 'ADD_TICKET_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'ADD_TICKET_FAIL', payload: error.response?.data?.message || error.message });
  }
};

// Action to get all tickets
export const getTickets = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_TICKETS_REQUEST' });
    const { data } = await axiosInstance.get('/admin/tickets');
    dispatch({ type: 'GET_TICKETS_SUCCESS', payload: data.buses });
  } catch (error) {
    dispatch({ type: 'GET_TICKETS_FAIL', payload: error.response?.data?.message || error.message });
  }
};

// Action to get ticket by ID
export const getTicketById = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'GET_TICKET_BY_ID_REQUEST' });
    const { data } = await axiosInstance.get(`/admin/ticket/${id}`);

    dispatch({ type: 'GET_TICKET_BY_ID_SUCCESS', payload: data.foundTicket });
  } catch (error) {
    dispatch({ type: 'GET_TICKET_BY_ID_FAIL', payload: error.response?.data?.message || error.message });
  }
};

// Action to update a ticket
export const updateTicket = (id, updateData) => async (dispatch) => {
  try {
    dispatch({ type: 'UPDATE_TICKET_REQUEST' });
    const { data } = await axiosInstance.put(`/admin/ticket/${id}`, updateData);
    dispatch({ type: 'UPDATE_TICKET_SUCCESS', payload: data.updatedTicket });
  } catch (error) {
    dispatch({ type: 'UPDATE_TICKET_FAIL', payload: error.response?.data?.message || error.message });
  }
};

// Action to delete a ticket
export const deleteTicket = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'DELETE_TICKET_REQUEST' });
    await axiosInstance.delete(`/admin/ticket/${id}`);
    dispatch({ type: 'DELETE_TICKET_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_TICKET_FAIL', payload: error.response?.data?.message || error.message });
  }
};
