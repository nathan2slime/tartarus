import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  background: ${props => props.theme.backgroundColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;

  img {
    max-width: 120px;
    margin-bottom: 40px;
  }

  p,
  a {
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.textColorDown};
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }

  a {
    font-size: 0.875rem;
    margin-bottom: 10px;
    text-decoration: underline;

    &:hover {
      color: ${props => props.theme.secondaryColorUp};
    }
  }
`;
