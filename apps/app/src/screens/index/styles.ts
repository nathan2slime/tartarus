import styled from 'styled-components';

export const IndexWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  background: ${props => props.theme.backgroundColor};

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;

  .toggle {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }

  main {
    width: 100%;
    max-width: 425px;
    min-height: 425px;
    padding: 20px;
    border-radius: 20px;

    > h3,
    > p {
      font-size: 1.4rem;
      font-family: ${props => props.theme.fontFamily};
      color: ${props => props.theme.primaryColorUp};
      text-align: center;
      margin-bottom: 10px;
    }

    > .wrapper {
      margin-bottom: 23px;
    }

    > p {
      max-width: 200px;
      color: ${props => props.theme.textColorDown};
      margin: 0px auto;
      margin-bottom: 50px;
      margin-top: 10px;
      padding-bottom: 20px;
      font-size: 0.875rem;
      border-bottom: 1px solid ${props => props.theme.borderColor};
    }

    > button {
      margin-top: 30px;
    }
  }
`;
