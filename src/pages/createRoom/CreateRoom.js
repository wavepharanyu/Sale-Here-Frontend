import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRoom, clearState, joinRoom } from "../../actions/roomActions";
import { useLocation, useNavigate } from "react-router-dom";
import "./CreateRoom.scss";
import TextInput from "../../components/textInput/TextInput";
import Button from "../../components/button/Button";
import TextButton from "../../components/textButton/TextButton";
import SlideUpContainer from "../../styles/SlideUpAnimation";

const CreateRoom = () => {
  const [room, setRoom] = useState("");
  const { errMsg, isLoading } = useSelector((state) => state.room);
  const location = useLocation();
  const dispatch = useDispatch();
  const ref = useRef(null);
  const navigate = useNavigate();

  let title = "";
  let placeholder = "";
  let btnTitle = "";
  const pathname = location.pathname;

  if (pathname === "/create-room") {
    title = "สร้างห้องใหม่";
    btnTitle = "ยืนยัน";
  }
  if (pathname === "/join-room") {
    title = "เข้าร่วมแชท";
    placeholder = "ชื่อห้อง";
    btnTitle = "เข้าร่วม";
  }

  useEffect(() => {
    ref.current && ref.current.focus();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (errMsg) {
        console.log("err", errMsg);
      } else {
        dispatch(clearState());
        navigate(`/chat-room/${room}`);
      }
    }
  }, [errMsg, isLoading]);

  const onSubmit = () => {
    if (pathname === "/join-room") {
      dispatch(joinRoom(room));
    }
    if (pathname === "/create-room") {
      dispatch(createRoom(room));
    }
  };

  return (
    <SlideUpContainer>
      <div className="create-container">
        <p className="title">{title}</p>
        <TextInput
          value={room}
          handleChange={setRoom}
          ref={ref}
          placeholder={placeholder}
        />
        {errMsg && <p className="err-msg">*{errMsg}</p>}
        <div className="create-button-group">
          <a href="/" className="button-link">
            <TextButton title="กลับ" isPaused={true} width="100px" />
          </a>

          <Button
            title={btnTitle}
            handleClick={() => onSubmit()}
            isPaused={true}
            width="100px"
          />
        </div>
      </div>
    </SlideUpContainer>
  );
};

export default CreateRoom;
