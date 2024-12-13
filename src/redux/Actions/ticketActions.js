import axiosInstance from '../Api/AxiosInstace';
import { GET_TICKET_ERROR , ADD_TICKET, UPDATE_TICKET, DELETE_TICKET} from '../Types/Types';


// Add Ticket
export const addTicket = (ticketData) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/admin/ticket', ticketData);
    dispatch({
      type: ADD_TICKET,
      payload: response.data.newTicket,
    });
  } catch (error) {
    dispatch({
      type: GET_TICKET_ERROR,
      payload: error.message,
    });
  }
};

// Update Ticket
export const updateTicket = (id, ticketData) => async (dispatch) => {
  try {
    const response = await axiosInstance.put(`/admin/ticket/${id}`, ticketData);
    dispatch({
      type: UPDATE_TICKET,
      payload: response.data.updatedTicket,
    });
  } catch (error) {
    dispatch({
      type: GET_TICKET_ERROR,
      payload: error.message,
    });
  }
};

// Delete Ticket
export const deleteTicket = (id) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/admin/ticket/${id}`);
    dispatch({
      type: DELETE_TICKET,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: GET_TICKET_ERROR,
      payload: error.message,
    });
  }
};
