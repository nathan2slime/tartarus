import classNames from 'classnames';
import { FC, useState } from 'react';
import { TarButtonProps } from './model';

import { ButtonWrapper } from './styles';

export const TarButton: FC<TarButtonProps> = props => {
  const [active, setActive] = useState(false);

  var _animation: NodeJS.Timeout;

  const onClick = () => {
    if (!props.disable) {
      if (_animation) clearTimeout(_animation);

      setActive(true);

      _animation = setTimeout(() => {
        setActive(false);
      }, 300);

      if (props.onClick) props.onClick();
    }
  };

  return (
    <ButtonWrapper
      {...props}
      aria-disabled={props.disable}
      role="button"
      className={classNames([{ active, ...props.cssClasses }])}
      onClick={onClick}
    >
      {props.children}
    </ButtonWrapper>
  );
};

TarButton.defaultProps = {
  type: 'button',
  variant: 'solid',
  color: 'primary',
  onClick: () => {},
  bold: 400,
};
