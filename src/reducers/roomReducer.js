import { CREATE_ROOM, CLEAR_STATE, JOIN_ROOM } from "../actions/roomActions";

const initialState = {
  rooms: [
    {
      name: "room2",
      createdDate: Date.now(),
    },
  ],
  errMsg: '',
  isLoading: true
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROOM:
        //หาว่ามีชื่อห้องแชทซ้ำกันหรือไม่
        const foundRoom = state.rooms.find(
            (room) => room.name === action.payload
        );
        if (foundRoom === undefined) {
            const newRoom = { name: action.payload, createdDate: Date.now() }
        return {
            ...state,
            rooms: [...state.rooms, newRoom],
            errMsg: "",
            isLoading: false
        };
        } else {
            return{
                ...state,
                errMsg: "มีผู้ใช้งานใช้ชื่อห้องแชทนี้แล้ว กรุณาตั้งชื่อใหม่",
                isLoading: false
            }
        }

        case JOIN_ROOM:
          const isFoundRoom = state.rooms.find(
            (room) => room.name === action.payload
        );
        if (isFoundRoom === undefined) {
          return{
            ...state,
            errMsg: "ไม่มีชื่อห้องแชทนี้ กรุณาพิมพ์ชื่อใหม่ (พิมพ์ชื่อห้อง room2)",
            isLoading: false
          }
        } else {
          return {
            ...state,
            errMsg: "",
            isLoading: false
          };
        }

        case CLEAR_STATE:
            return initialState
    default:
      return state;
  }
};

export default roomReducer;
