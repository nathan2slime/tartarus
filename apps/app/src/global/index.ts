import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    user-select: none;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${props => props.theme.primaryColorUp};
      border-radius: 3px;
    }
  }

  .icon {
    display: grid;
    place-items: center;
  }
`;
