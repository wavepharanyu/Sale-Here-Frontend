import React from "react";
import { useDispatch } from "react-redux";
import "./TextButton.scss";
import styled from "styled-components";
import { initSlide, expandScale } from "../../styles/SlideUpAnimation";

const TextButton = ({
  title,
  handleClick,
  fontSize,
  padding,
  width,
  isPaused,
}) => {
  const dispatch = useDispatch();
  const ButtonStyle = styled.button`
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
      className="text-button-container"
      onClick={() => dispatch(handleClick)}
    >
      {title}
    </ButtonStyle>
  );
};

export default TextButton;
