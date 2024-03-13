import React from 'react';
import { keyframes } from 'styled-components';

export const slideLeft = keyframes`   
0% {
    transform: translateX(20px);
    opacity: 0;
}
100% {
    transform: translateX(0px);
    opacity: 1;
}
`;


