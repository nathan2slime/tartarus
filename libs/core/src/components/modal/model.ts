export type TarModalProps = {
  open: boolean;
  onClose: (value: boolean) => void;
  children: React.ReactNode;
  width?: number;
  height?: number;
};

export type TarToggleModalProps = {
  children: React.ReactNode;
};
