import { readableColor } from 'polished';
import styled from 'styled-components';

import { fade } from '../../animations';

import { TarButtonProps } from './model';

const color = (props: any) =>
  props?.theme[props?.color + 'ColorDown'] ?? 'transparent';

export const ButtonWrapper = styled.button<TarButtonProps>`
  min-width: 40px;
  width: ${props => (props.block ? '100%' : 'fit-content')};
  background-color: ${props => color(props.variant == 'solid' ? props : null)};
  border: 1px solid ${props => color(props.variant == 'outline' ? props : null)};
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.bold};
  opacity: ${props => (props.disable ? 0.4 : 1)};
  color: ${({ variant, ...props }) =>
    variant == 'solid'
      ? readableColor(
          props.theme.primaryColorDown,
          props.theme.textColorUp,
          props.theme.textColorDown
        )
      : color(props)};
  outline: none;
  height: 40px;
  transition: all 0.3s;
  font-size: 0.875rem;
  border-radius: 8px;
  cursor: ${props => (props.disable ? 'default' : 'pointer')};
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    animation: ${fade} 0.3s linear;
  }
`;
