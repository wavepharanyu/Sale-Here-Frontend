import React, { useState } from "react";
import "./ChatRoom.scss";
import { useParams } from "react-router-dom";
import SlideUpContainer, { initSlide } from "../../styles/SlideUpAnimation";
import { slideLeft } from "../../styles/SlideLeftAnimation";
import styled from "styled-components";

const SlideLeftContainer = styled.div`
animation-name: ${slideLeft};
animation-duration: 1s;
animation-iteration-count: 1;
animation-fill-mode: forwards;
animation-delay: 0.2s;
opacity: 0;
`;

const SlideUpDelayContainer = styled.div`
animation-name: ${initSlide};
animation-duration: 1s;
animation-iteration-count: 1;
animation-fill-mode: forwards;
animation-delay: 0.5s;
opacity: 0;
`;

const ChatRoom = () => {
  const { id } = useParams();
  const [text, setText] = useState("");

  return (
    <div className="chat-container">
      <SlideUpContainer>
        <p className="title chat-title">ห้อง {id}</p>
      </SlideUpContainer>
      <SlideLeftContainer>
        <div className="chat-body">
          <div className="chat-text">
            <p className="chat-from">คุณ eiei</p>
            <div className="text-box">
              <p className="text-description">สวัสดี</p>
            </div>
          </div>
        </div>
      </SlideLeftContainer>
      <SlideUpDelayContainer>
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="chat-placeholder">
          <p>Enter เพื่อส่ง</p>
        </div>
      </div>
      </SlideUpDelayContainer>
    </div>
  );
};

export default ChatRoom;
