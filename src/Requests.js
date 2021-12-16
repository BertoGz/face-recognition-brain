import { BASE_URL, GET_USERS_ENDPOINT, SIGN_IN_ENDPOINT } from "./Constants";
const sendRequest = async ({ endpoint, body }) => {
  const url = `${BASE_URL}${endpoint}`;
  console.log("url", url, endpoint);
  const res = fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return res;
};
const postRequest = async ({ endpoint, body }) => {
  try {
    const response = await sendRequest({ endpoint, body });
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
    body: { email, password },
  });
