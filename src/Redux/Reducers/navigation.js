import {
  SET_NAVIGATION_ROUTE,
  RESET_NAVIGATION_STATE,
} from "../Actions/navigation";

const initialState = {
  route: "signin",
};

export const navigation = (state = initialState, event) => {
  const { type, payload } = event;

  switch (type) {
    case SET_NAVIGATION_ROUTE:
      return { route: payload };
    case RESET_NAVIGATION_STATE:
      return initialState;
    default:
      return state;
  }
};
