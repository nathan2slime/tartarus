export type SelectValue = {
  title: string;
  slug?: string | number;
};

export type TarSelectProps = {
  children: React.ReactNode;
  value?: SelectValue;
  search?: string;
  disable?: boolean;
  error?: boolean;
  placeholder?: string;
  message?: string;
  label?: string;
  height?: number;
  onClose?: () => void;
  onBlur?: () => void;
  onChange?: (item: SelectValue) => void;
  onSearch?: (value: string) => void;
};
