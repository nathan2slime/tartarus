import styled from 'styled-components';

import { scale } from '../../animations';

import { TarModalProps } from './model';

export const ModalWrapper = styled.div<TarModalProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;

  top: 0px;
  right: 0px;

  background: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.2s;

  pointer-events: ${props => (props.open ? 'all' : 'none')};
  opacity: ${props => (props.open ? 1 : 0)};
  backdrop-filter: blur(4px);

  > div {
    width: 100%;
    height: 100%;
    max-width: 100%;

    background: ${props => props.theme.foregroundColorDown};

    animation: ${scale} 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @media (min-width: 425px) {
    padding: 15px;

    > div {
      max-width: ${props => props.width ?? 600}px;
      height: ${props => props.height ?? 400}px;
      border-radius: 8px;
    }
  }
`;
