import { readableColor } from 'polished';
import styled from 'styled-components';

type SelectStylesProps = {
  open: boolean;
  height?: number;
  error: boolean;
  disable: boolean;
};

export const SelectWrapper = styled.div<SelectStylesProps>`
  position: relative;
  opacity: ${props => (props.disable ? 0.5 : 1)};
  pointer-events: ${props => (props.disable ? 'none' : 'all')};

  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    input,
    label,
    span {
      color: ${props => props.theme.textColorDown};
      font-family: ${props => props.theme.fontFamily};
    }

    input {
      height: 40px;
      padding: 10px 15px;
      border-radius: 8px;
      background-color: ${props => props.theme.foregroundColorDown};
      border: 1px solid
        ${props =>
          props.error ? props.theme.errorColorUp : props.theme.borderColor};
      outline: none;
      font-size: 0.845rem;

      &:focus {
        border-color: ${props =>
          props.error ? props.theme.errorColorUp : props.theme.primaryColorUp};
      }

      &::selection {
        background: ${props => props.theme.primaryColorUp};
        color: ${props =>
          readableColor(
            props.theme.primaryColorUp,
            props.theme.textColorUp,
            props.theme.textColorDown
          )};
      }

      &::placeholder {
        color: ${props => props.theme.placeholderColor};
      }
    }

    label {
      font-size: 0.8rem;
      margin-bottom: 7px;
    }

    span {
      color: ${props => props.theme.errorColorUp};
      font-size: 0.75rem;
      margin-top: 7px;
    }
  }

  > div:last-child {
    width: 100%;
    background-color: ${props => props.theme.foregroundColorUp};
    max-height: ${props => props.height ?? '200px'};

    pointer-events: ${props => (props.open ? 'all' : 'none')};
    opacity: ${props => (props.open ? 1 : 0)};
    transition: all 0.15s;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.borderColor};

    overflow-y: auto;
    z-index: 2;
    position: absolute;
  }
`;
