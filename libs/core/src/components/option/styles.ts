import styled from 'styled-components';

export const OptionWrapper = styled.div`
  width: 100%;
  height: 40px;

  background-color: ${props => props.theme.foregroundColorDown};
  font-size: 0.845rem;
  color: ${props => props.theme.textColorDown};
  font-family: ${props => props.theme.fontFamily};
  padding: 10px 15px;
  outline: none;
  border: 0px;
  display: flex;
  align-items: center;

  &:hover {
    background: ${props => props.theme.foregroundColorUp};
  }

  &.active {
    color: ${props => props.theme.primaryColorUp};
  }
`;
