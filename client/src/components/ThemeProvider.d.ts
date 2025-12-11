import { ReactNode } from 'react';

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export declare const useTheme: () => ThemeContextType;

export declare const ThemeProvider: (props: { children: ReactNode }) => JSX.Element;
