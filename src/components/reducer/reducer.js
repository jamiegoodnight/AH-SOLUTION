import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  ADD_FRIEND,
  ADD_FRIEND_FAILURE
} from "../actions/actions";

const initialState = {
  friends: [],
  loggingIn: false,
  error: null,
  loading: true,
  token: localStorage.getItem("token")
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      console.log("STORE", state);
      console.log("action", action);
      return {
        ...state,
        loggingIn: true,
        error: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: false,
        token: localStorage.getItem("token")
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case FETCH_FRIENDS_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        loading: false,
        error: null
      };
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case ADD_FRIEND:
      return {
        ...state,
        friends: action.payload
      };
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
