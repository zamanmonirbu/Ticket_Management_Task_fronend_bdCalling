import axiosInstance from '../Api/AxiosInstace';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS,LOGOUT,REFRESH_TOKEN_SUCCESS } from '../Types/Types';


// Action creators
export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const registerRequest = () => ({ type: REGISTER_REQUEST });
export const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
export const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

// Async actions (thunks)
export const login = (email, password) => {
  console.log(email, password)
  return (dispatch) => {
    dispatch(loginRequest());
    axiosInstance
      .post('/auth/login', { email, password })
      .then((response) => {
        const user = response.data.user;
        console.log(user);
        localStorage.setItem('authToken', response.data.accessToken);
        dispatch(loginSuccess(user));
        window.location.href = '/dashboard'; // Redirect after successful login
      })
      .catch((error) => {
        dispatch(loginFailure(error.response?.data.message || 'Login failed'));
      });
  };
};

export const register = (name, email, password) => {
  return (dispatch) => {
    dispatch(registerRequest());
    axiosInstance
      .post('/auth/register', { name, email, password })
      .then((response) => {
        const user = response.data.user;
        dispatch(registerSuccess(user));
        window.location.href = '/login'; // Redirect to login page after registration
      })
      .catch((error) => {
        dispatch(registerFailure(error.response?.data.message || 'Registration failed'));
      });
  };
};


// Refresh Token Action
export const refreshAccessToken = () => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/auth/refresh');
    const { accessToken } = response.data;

    dispatch({ type: REFRESH_TOKEN_SUCCESS, payload: accessToken });
    return accessToken;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    dispatch(logout()); // Logout if refresh fails
    throw error;
  }
};

// Logout Action
export const logout = () => (dispatch) => {
  axiosInstance.post('/auth/logout').then(() => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem('authToken'); // Remove authToken from localStorage
    window.location.href = '/login'; // Redirect to login page after logout
  });
};
  