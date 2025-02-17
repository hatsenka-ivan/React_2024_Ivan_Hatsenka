import "./ThemeProvider.css";
import {
  ComponentChildProp,
  ThemeColorContext,
} from "../../types/global.types";
import { createContext, useState } from "react";

export const ThemeContext = createContext<null | ThemeColorContext>(null);

export default function ThemeProvider({ children }: ComponentChildProp) {
  const [themeColor, setThemeColor] = useState<string>(getBrowserTheme());

  function toggleTheme() {
    const newThemeColor = themeColor === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newThemeColor);
    setThemeColor(newThemeColor);
  }

  function getBrowserTheme(): string {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    const browserTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    localStorage.setItem("theme", browserTheme);
    return browserTheme;
  }

  return (
    <ThemeContext.Provider value={{ themeColor, toggleTheme }}>
      <div className={`theme-wrapper ${themeColor}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
