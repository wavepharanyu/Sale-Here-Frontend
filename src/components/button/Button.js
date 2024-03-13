import React from "react";
import { useDispatch } from "react-redux";
import "./Button.scss";
import styled from "styled-components";
import { initSlide, expandScale } from "../../styles/SlideUpAnimation";

const Button = ({ title, handleClick, fontSize, padding, width, isPaused }) => {
  const dispatch = useDispatch();

  // isPaused คือค่าที่เอาไว้ pause animation ที่เอาไว้ใช้แค่ตอนครั้งแรกที่ render หน้าเว็บ
  const ButtonStyle = styled.div`
    font-size: ${fontSize};
    padding: ${padding};
    width: ${width};
    text-align: center;

    animation-name: ${!isPaused ? initSlide : ""};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    &:hover {
      animation-name: ${expandScale};
      animation-duration: 0.4s;
      animation-fill-mode: forwards;
    }
  `;
  return (
    <ButtonStyle
      className={isPaused ? "button-container paused" : "button-container"}
      onClick={handleClick}
    >
      {title}
    </ButtonStyle>
  );
};

export default Button;
