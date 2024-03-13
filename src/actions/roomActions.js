export const CREATE_ROOM = "CREATE_ROOM";
export const JOIN_ROOM = "JOIN_ROOM";
export const CLEAR_STATE = "CLEAR_STATE";

export const createRoom = (roomName) => ({
  type: CREATE_ROOM,
  payload: roomName,
});

export const joinRoom = (roomName) => ({
  type: JOIN_ROOM,
  payload: roomName,
});

export const clearState = () => ({
    type: CLEAR_STATE,
});