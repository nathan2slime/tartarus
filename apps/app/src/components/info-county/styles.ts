import styled from 'styled-components';

export const CurrentCountyStyles = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  position: relative;
  overflow-y: auto;
  overflow-x: hidden;

  h3 {
    width: 100%;
    max-width: 247px;
    text-align: center;
    font-size: 1.26rem;
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.textColorDown};
    letter-spacing: 0.8px;
    margin-bottom: 50px;

    @media (min-width: 321px) {
      max-width: 100%;
    }
  }

  section {
    width: 100%;
    max-width: 450px;

    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    padding: 20px;

    border-radius: 8px;
    border: 1px solid ${props => props.theme.borderColor};
    transition: border 0.3s;
    background: ${props => props.theme.foregroundColorUp};

    span {
      display: block;
      font-family: ${props => props.theme.fontFamily};
      color: ${props => props.theme.textColorDown};
      letter-spacing: 0.8px;
      font-size: 0.875rem;
      flex: 1;

      &:last-child {
        text-align: end;
        color: ${props => props.theme.primaryColorUp};
        font-weight: 700;
      }

      &:first-child {
        padding-right: 20px;
      }
    }

    &:hover {
      border-color: ${props => props.theme.primaryColorDown};
    }
  }

  .icon {
    position: absolute;
    top: 20px;
    right: 20px;

    cursor: pointer;
  }
`;
