export const CREATE_USER = "CREATE_USER";

export const createUser = (username) => ({
  type: CREATE_USER,
  payload: username,
});