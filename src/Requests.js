import {
  CLARIFAI,
  BASE_URL,
  INCREASE_ENTRY,
  SIGN_IN_ENDPOINT,
  USER_REGISTER_ENDPOINT,
} from "./Constants";
const sendRequest = async ({ endpoint, method, body }) => {
  const url = `${BASE_URL}${endpoint}`;
  console.log("url", url, endpoint);
  const res = fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return res;
};
const postRequest = async ({ endpoint, method, body }) => {
  try {
    const response = await sendRequest({ endpoint, method, body });
    /* response
      .then((res) => res.json())
      .then((data) => console.log("hi!", data))
      .catch(console.log);
*/
    const res = response || {};

    console.log("data", res);
    const { status } = res || {};
    if (status > 0) {
      return res;
    }
    return res;
  } catch (error) {
    return { error };
  }
};

export const requestUserSignin = async ({ email, password }) =>
  postRequest({
    endpoint: SIGN_IN_ENDPOINT,
    method: "post",
    body: { email, password },
  });
export const requestUserRegister = async ({
  email,
  confirmEmail,
  password,
  confirmPassword,
  name,
}) =>
  postRequest({
    endpoint: USER_REGISTER_ENDPOINT,
    method: "post",
    body: { email, confirmEmail, password, confirmPassword, name },
  });

export const increaseEntry = ({ id }) =>
  postRequest({
    endpoint: INCREASE_ENTRY,
    method: "put",
    body: {
      id,
    },
  });
export const clarifai = ({ url }) =>
  postRequest({
    endpoint: CLARIFAI,
    method: "post",
    body: {
      url,
    },
  });
