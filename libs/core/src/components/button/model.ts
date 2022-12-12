import { ButtonHTMLAttributes } from 'react';

export type TarButtonProps = {
  type?: 'button' | 'submit';
  color?: 'primary' | 'secondary';
  variant?: 'solid' | 'outline';
  disable?: boolean;
  block?: boolean;
  bold?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  onClick?: () => void;
  children: React.ReactNode;
  cssClasses?: { [key: string]: boolean };
} & ButtonHTMLAttributes<any>;
