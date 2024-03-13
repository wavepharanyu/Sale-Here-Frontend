import React from "react";
import { useSelector } from "react-redux";
import "./Home.scss";
import Button from "../../components/button/Button";
import SlideUpContainer from "../../styles/SlideUpAnimation";
import TextButton from "../../components/textButton/TextButton";

const Home = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="home-container">
      <SlideUpContainer>
        <p className="title">คุณ {user}</p>
        <div className="button-group">
          <a className="button-link" href="/create-room">
            <Button
              title="สร้างห้องใหม่"
              fontSize="30px"
              padding="25px 0"
              width="350px"
              isPaused={true}
            />
          </a>
          <a className="button-link" href="/join-room">
            <TextButton
              title="เข้าร่วมแชท"
              fontSize="30px"
              padding="25px 0"
              width="350px"
              isPaused={true}
            />
          </a>
        </div>
      </SlideUpContainer>
    </div>
  );
};

export default Home;
