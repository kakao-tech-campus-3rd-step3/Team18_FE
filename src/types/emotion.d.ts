import '@emotion/react';
import { theme } from '@/styles/theme';

type ThemeType = typeof theme;
/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
