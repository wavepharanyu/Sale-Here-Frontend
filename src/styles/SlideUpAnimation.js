import React from 'react';
import styled, { keyframes } from 'styled-components';

const SlideUpContainer = ({children}) => {
  return <Container>{children}</Container>;
};

export default SlideUpContainer;

export const initSlide = keyframes`   
    0% {
        transform: translateY(10px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const expandScale = keyframes`   
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.1);
    }
`;

const Container = styled.div`
  animation-name: ${initSlide};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;