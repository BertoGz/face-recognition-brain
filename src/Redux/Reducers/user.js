import { INIT_USER_DATA, SET_USER_ENTRIES } from "../Actions/user";

const initialState = {
  name: "Guest",
  entries: 0,
};

export const user = (state = initialState, event) => {
  const { type, payload } = event;

  switch (type) {
    case INIT_USER_DATA:
      return { state: payload };
    case SET_USER_ENTRIES:
      return { ...state, entries: payload };
  }
};
