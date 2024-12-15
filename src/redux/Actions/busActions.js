import axiosInstance from '../Api/AxiosInstace';
import { 
  ADD_BUS, 
  UPDATE_BUS, 
  DELETE_BUS, 
  GET_BUS_ERROR, 
  SEARCH_BUSES_REQUEST, 
  SEARCH_BUSES_SUCCESS, 
  SEARCH_BUSES_FAILURE, 
  GET_ALL_BUSES, 
  GET_BUS_BY_ID 
} from '../Types/Types';

// Add Bus
export const addBus = (busData) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/admin/bus', busData);
    dispatch({
      type: ADD_BUS,
      payload: response.data.newBus,
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

// Search Buses
export const searchBuses = ({ from, to, time }) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_BUSES_REQUEST });

    try {
      const response = await axiosInstance.post("/user/bus/search", { from, to, time });
      dispatch({
        type: SEARCH_BUSES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      let errorMessage = "An error occurred while fetching bus data.";
      if (error.response && error.response.data) {
        errorMessage = error.response.data.message || errorMessage;
      } else if (error.message) {
        errorMessage = error.message;
      }

      dispatch({
        type: SEARCH_BUSES_FAILURE,
        payload: errorMessage,
      });
    }
  };
};

// Get All Buses
export const getAllBuses = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/admin/bus'); 
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

// ✅ Get Bus By ID
export const getBusById = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/admin/bus/${id}`);
    console.log(response)
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
