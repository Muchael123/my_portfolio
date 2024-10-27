import { createContext, useContext } from "react";

export enum Theme {
  Dark = "Dark",
  Light = "Light",
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (Theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Dark,
  setTheme: (theme) => console.warn(`no theme provider for theme: ${theme}`),
});
export const useTheme = () => useContext(ThemeContext);
