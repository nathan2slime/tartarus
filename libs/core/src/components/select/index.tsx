import { FC, Ref, useEffect, useRef, useState } from 'react';

import { TarSelectProps } from './model';
import { SelectWrapper } from './styles';

export const TarSelect: FC<TarSelectProps> = ({
  height,
  value,
  label,
  children,
  disable,
  placeholder,
  search,
  error,
  message,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const ref: Ref<any> = useRef();
  const header: Ref<any> = useRef();
  const body: Ref<any> = useRef();

  const onListenClick = (e: any) => {
    if (!e.path.includes(ref.current)) {
      onClose();
    }
  };

  const onClose = () => {
    setOpen(false);

    onWaitClose(props.onClose);
  };

  const onBlur = () => {
    if (open) {
      onWaitClose(props.onBlur);
    } else {
      props.onBlur?.call('');
    }
  };

  const onWaitClose = (exec?: () => void) => {
    if (exec) setTimeout(() => exec?.call(''), 300);
  };

  const onChange = (e: any) => {
    const { el, title, slug } = e.detail;

    const options = Array.from(body.current.children);

    options.forEach((currentOption: any) => {
      currentOption.classList.remove('active');
    });

    if (options.includes(el) && props.onChange) {
      onClose();

      props.onChange({ title, slug });

      el.classList.add('active');
    }
  };

  const openSelect = () => {
    if (!disable) {
      body.current.style.top = `${header.current.offsetHeight + 10}px`;

      setOpen(true);
    }
  };

  const onSearch = (e: any) => {
    const value: string = e.target.value;

    if (props.onSearch) props.onSearch(value);
  };

  useEffect(() => {
    document.addEventListener('click', onListenClick);
    document.addEventListener('tarChange', onChange);

    return () => {
      document.removeEventListener('tarChange', onChange);
      document.removeEventListener('click', onListenClick);
    };
  }, []);

  return (
    <SelectWrapper
      open={open}
      error={!!error}
      disable={!!disable}
      height={height}
    >
      <div
        ref={header}
        role="button"
        aria-invalid={error}
        aria-disabled={disable}
      >
        {label && <label>{label}</label>}

        <input
          onClick={openSelect}
          onBlur={onBlur}
          onFocus={openSelect}
          ref={ref}
          placeholder={placeholder}
          value={search || ''}
          onInput={onSearch}
        />

        {error && <span>{message}</span>}
      </div>

      <div ref={body}>{children}</div>
    </SelectWrapper>
  );
};

TarSelect.propTypes = {};
