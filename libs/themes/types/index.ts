export type Theme = {
  primaryColorUp: string;
  primaryColorDown: string;
  backgroundColor: string;
  foregroundColorUp: string;
  foregroundColorDown: string;
  fontFamily: string;
  borderColor: string;
  errorColorDown: string;
  errorColorUp: string;
  textColorUp: string;
  secondaryColorUp: string;
  secondaryColorDown: string;
  textColorDown: string;
  placeholderColor: string;
};

export type MultiTheme = {
  [name: string]: Theme;
};
