import { FC, Ref, useRef } from 'react';

import { TarOptionProps } from './model';

import { OptionWrapper } from './styles';

export const TarOption: FC<TarOptionProps> = props => {
  const ref: Ref<any> = useRef();

  const onClick = () => {
    document.dispatchEvent(
      new CustomEvent('tarChange', {
        detail: {
          title: props.title,
          slug: props.slug,
          el: ref.current,
        },
      })
    );
  };

  return (
    <OptionWrapper ref={ref} onClick={onClick}>
      {props.title}
    </OptionWrapper>
  );
};
