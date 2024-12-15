import { 
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE, 
    UPDATE_USER_STATUS_REQUEST, 
    UPDATE_USER_STATUS_SUCCESS, 
    UPDATE_USER_STATUS_FAILURE, 
    DELETE_USER_REQUEST, 
    DELETE_USER_SUCCESS, 
    DELETE_USER_FAILURE, 
    CREATE_USER_REQUEST, 
    CREATE_USER_SUCCESS, 
    CREATE_USER_FAILURE 
  } from '../Types/Types';
  
  const initialState = {
    adminUsers: [],
    loading: false,
    error: null,
    creatingUser: false,
    userCreated: null,
  };
  
  // User management reducer
  const userReducerViaAdmin = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return { ...state, loading: true };
      case FETCH_USERS_SUCCESS:
        console.log(action.payload)
        return { ...state, loading: false, adminUsers: action.payload };
      case FETCH_USERS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      case UPDATE_USER_STATUS_REQUEST:
        return { ...state, loading: true };
      case UPDATE_USER_STATUS_SUCCESS:
        return {
          ...state,
          loading: false,
          adminUsers: state.adminUsers.map((user) =>
            user._id === action.payload._id ? action.payload : user
          ),
        };
      case UPDATE_USER_STATUS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      case DELETE_USER_REQUEST:
        return { ...state, loading: true };
      case DELETE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          adminUsers: state.adminUsers.filter((user) => user._id !== action.payload),
        };
      case DELETE_USER_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      case CREATE_USER_REQUEST:
        return { ...state, creatingUser: true };
      case CREATE_USER_SUCCESS:
        return {
          ...state,
          creatingUser: false,
          adminUsers: [...state.adminUsers, action.payload],
          userCreated: action.payload,
        };
      case CREATE_USER_FAILURE:
        return { ...state, creatingUser: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default userReducerViaAdmin;
  