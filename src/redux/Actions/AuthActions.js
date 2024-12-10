import axiosInstance from '../Api/AxiosInstace';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from '../Types/Types';


// Action creators
export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const registerRequest = () => ({ type: REGISTER_REQUEST });
export const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
export const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

// Async actions (thunks)
export const login = (email, password) => {
  return (dispatch) => {
    dispatch(loginRequest());
    axiosInstance
      .post('/auth/login', { email, password })
      .then((response) => {
        const user = response.data.user;
        localStorage.setItem('authToken', response.data.token);
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
