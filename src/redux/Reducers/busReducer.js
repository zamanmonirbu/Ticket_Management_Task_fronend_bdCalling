import { GET_BUS_ERROR, ADD_BUS, UPDATE_BUS, DELETE_BUS, SEARCH_BUSES_REQUEST, SEARCH_BUSES_SUCCESS, SEARCH_BUSES_FAILURE } from "../Types/Types";

const initialState = {
  buses: [],
  error: null,
  from: "",
  to: "",
  time: "",
  searchResultsView: [],
  loading: false, // To handle loading state for the search
};

const busReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUS:
      return {
        ...state,
        buses: [...state.buses, action.payload],
      };

    case UPDATE_BUS:
      return {
        ...state,
        buses: state.buses.map((bus) =>
          bus._id === action.payload._id ? action.payload : bus
        ),
      };

    case DELETE_BUS:
      return {
        ...state,
        buses: state.buses.filter((bus) => bus._id !== action.payload),
      };

    case GET_BUS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    // Handle the request action (loading state)
    case SEARCH_BUSES_REQUEST:
      return {
        ...state,
        loading: true, // Set loading to true when the search request is initiated
        searchResults: [], // Clear previous search results
      };

    // Handle the success action
    case SEARCH_BUSES_SUCCESS:
      return {
        ...state,
        loading: false, // Set loading to false when the search is successful
        searchResultsView: action.payload, // Set the search results in the state
        from: action.payload.from, // If you want to track the search criteria
        to: action.payload.to,
        time: action.payload.time,
      };

    // Handle the failure action
    case SEARCH_BUSES_FAILURE:
      return {
        ...state,
        loading: false, // Set loading to false if there's an error
        error: action.payload, // Store the error message
      };

    default:
      return state;
  }
};

export default busReducer;
