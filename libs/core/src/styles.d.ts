import { Theme } from '@tar/themes';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
