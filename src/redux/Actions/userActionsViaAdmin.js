import axiosInstance from '../Api/AxiosInstace';
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

// Action creators for fetching users
export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
export const fetchUsersSuccess = (users) => ({ type: FETCH_USERS_SUCCESS, payload: users });
export const fetchUsersFailure = (error) => ({ type: FETCH_USERS_FAILURE, payload: error });

// Action creators for updating user status
export const updateUserStatusRequest = () => ({ type: UPDATE_USER_STATUS_REQUEST });
export const updateUserStatusSuccess = (user) => ({ type: UPDATE_USER_STATUS_SUCCESS, payload: user });
export const updateUserStatusFailure = (error) => ({ type: UPDATE_USER_STATUS_FAILURE, payload: error });

// Action creators for deleting user
export const deleteUserRequest = () => ({ type: DELETE_USER_REQUEST });
export const deleteUserSuccess = (userId) => ({ type: DELETE_USER_SUCCESS, payload: userId });
export const deleteUserFailure = (error) => ({ type: DELETE_USER_FAILURE, payload: error });

// Action creators for creating a user
export const createUserRequest = () => ({ type: CREATE_USER_REQUEST });
export const createUserSuccess = (user) => ({ type: CREATE_USER_SUCCESS, payload: user });
export const createUserFailure = (error) => ({ type: CREATE_USER_FAILURE, payload: error });

// Fetch all users
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axiosInstance
      .get('/admin/users')  // Endpoint to fetch users
      .then((response) => {
        dispatch(fetchUsersSuccess(response.data.users)); // Assuming `users` is an array in the response
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.response?.data.message || 'Failed to fetch users'));
      });
  };
};

// Update user status (e.g., activate or deactivate)
export const updateUserStatus = (userId, data) => {
  return (dispatch) => {
    dispatch(updateUserStatusRequest());
    axiosInstance
      .put(`/admin/users/${userId}/status`,data) // Assuming the status change is done via PUT
      .then((response) => {
        dispatch(updateUserStatusSuccess(response.data.user)); // Assuming updated user data is returned
      })
      .catch((error) => {
        dispatch(updateUserStatusFailure(error.response?.data.message || 'Failed to update user status'));
      });
  };
};

// Delete user
export const deleteUser = (userId) => {
  return (dispatch) => {
    dispatch(deleteUserRequest());
    axiosInstance
      .delete(`/admin/users/${userId}`) // Endpoint to delete user
      .then(() => {
        dispatch(deleteUserSuccess(userId)); // Pass the user ID to remove from the list
      })
      .catch((error) => {
        dispatch(deleteUserFailure(error.response?.data.message || 'Failed to delete user'));
      });
  };
};

// Create a new user (admin panel)
export const createUser = (name, email, password, address, mobile, role) => {
  return (dispatch) => {
    dispatch(createUserRequest());
    axiosInstance
      .post('/auth/register', { name, email, password, address, mobile, role }) // Endpoint to create a user
      .then((response) => {
        dispatch(createUserSuccess(response.data.user)); // Assuming new user data is returned
      })
      .catch((error) => {
        dispatch(createUserFailure(error.response?.data.message || 'Failed to create user'));
      });
  };
};
