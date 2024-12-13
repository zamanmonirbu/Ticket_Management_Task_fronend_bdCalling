import axiosInstance from '../Api/AxiosInstace';
import { ADD_BUS, UPDATE_BUS, DELETE_BUS,GET_BUS_ERROR ,SEARCH_BUSES_REQUEST,
  SEARCH_BUSES_SUCCESS,SEARCH_BUSES_FAILURE,} from '../Types/Types';


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


export const searchBuses = ({ from, to, time }) => {
  return async (dispatch) => {
    // Dispatch request action
    dispatch({ type: SEARCH_BUSES_REQUEST });

    try {
      // API call to fetch buses, using axiosInstance
      const response = await axiosInstance.post("/user/bus/search", { from, to, time });
      // console.log(response)
      dispatch({
        type: SEARCH_BUSES_SUCCESS,
        payload: response.data, // The response data will be used in payload
      });
    } catch (error) {
      // console.log(error);
      // Handle errors, dispatch failure with error message
      let errorMessage = "An error occurred while fetching bus data.";
      if (error.response && error.response.data) {
        errorMessage = error.response.data.message || errorMessage;
      } else if (error.message) {
        errorMessage = error.message;
      }

      dispatch({
        type: SEARCH_BUSES_FAILURE,
        payload: errorMessage, // Error message in payload
      });
    }
  };
};
