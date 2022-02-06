export const SET_NAVIGATION_ROUTE = "SET_NAVIGATION_ROUTE";
export const RESET_NAVIGATION_STATE = "RESET_NAVIGATION_STATE";
export const setNavigationRoute = (payload) => {
  return { type: SET_NAVIGATION_ROUTE, payload };
};
export const resetNavigationState = () => {
  return { type: RESET_NAVIGATION_STATE };
};
