import { FC, Ref, useEffect, useRef } from 'react';

import { TarModalProps, TarToggleModalProps } from './model';
import { ModalWrapper } from './styles';

export const TarToggleModal: FC<TarToggleModalProps> = props => (
  <div custom-attribute="tar-modal">{props.children}</div>
);

export const TarModal: FC<TarModalProps> = props => {
  const ref: Ref<any> = useRef();

  const onListenClick = (e: any) => {
    const isOpen = !!e.path.find((el: HTMLElement) => {
      if (el?.getAttribute) {
        return el?.getAttribute('custom-attribute') == 'tar-modal';
      }

      return false;
    });

    if (!e.path.includes(ref.current) && !isOpen) {
      props.onClose(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', onListenClick);

    return () => {
      document.removeEventListener('click', onListenClick);
    };
  }, []);

  return (
    <ModalWrapper {...props}>
      {props.open && <div ref={ref}>{props.children}</div>}
    </ModalWrapper>
  );
};
