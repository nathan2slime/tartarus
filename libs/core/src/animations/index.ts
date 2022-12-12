import { keyframes } from 'styled-components';

export const fade = keyframes`  
  0% { opacity: 1; }
  
  50% { opacity: 0; }

  100% { opacity: 1; }
`;

export const scale = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
