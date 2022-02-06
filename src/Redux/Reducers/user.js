import {
  INIT_USER_DATA,
  SET_USER_ENTRIES,
  RESET_USER_STATE,
} from "../Actions/user";

const initialState = {
  name: "Guest",
  entries: 0,
};

export const user = (state = initialState, event) => {
  const { type, payload } = event;

  switch (type) {
    case INIT_USER_DATA:
      return { ...payload };
    case SET_USER_ENTRIES:
      return { ...state, entries: payload };
    case RESET_USER_STATE:
      return initialState;
    default:
      return state;
  }
};
