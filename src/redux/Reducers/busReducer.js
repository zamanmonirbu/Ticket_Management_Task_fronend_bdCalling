import { 
  GET_BUS_ERROR, 
  ADD_BUS, 
  UPDATE_BUS, 
  DELETE_BUS, 
  SEARCH_BUSES_REQUEST, 
  SEARCH_BUSES_SUCCESS, 
  SEARCH_BUSES_FAILURE, 
  GET_ALL_BUSES, 
  GET_BUS_BY_ID 
} from "../Types/Types";

const initialState = {
  buses: [],
  allBuses: [], 
  bus: null, // New state for a single bus
  error: null,
  from: "",
  to: "",
  time: "",
  searchResultsView: [],
  loading: false,
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

    case SEARCH_BUSES_REQUEST:
      return {
        ...state,
        loading: true,
        searchResultsView: [],
      };

    case SEARCH_BUSES_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResultsView: action.payload,
        from: action.payload.from,
        to: action.payload.to,
        time: action.payload.time,
      };

    case SEARCH_BUSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_ALL_BUSES:
      return {
        ...state,
        allBuses: action.payload,
      };

    // ✅ New case for Get Bus By ID
    case GET_BUS_BY_ID:
      return {
        ...state,
        bus: action.payload, // Store the fetched bus in state
      };

    default:
      return state;
  }
};

export default busReducer;
