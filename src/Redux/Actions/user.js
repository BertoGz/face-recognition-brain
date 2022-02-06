export const INIT_USER_DATA = "INIT_USER_DATA";
export const SET_USER_ENTRIES = "SET_USER_ENTRIES";
export const RESET_USER_STATE = "RESET_USER_STATE";

export const initUserData = (payload) => {
  return { type: INIT_USER_DATA, payload };
};
export const setUserEntries = (payload) => {
  return { type: SET_USER_ENTRIES, payload };
};
export const resetUserState = () => {
  return { type: RESET_USER_STATE };
};
