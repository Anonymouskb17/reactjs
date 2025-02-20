import { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const hanleSubmit = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const value = {
    theme,
    hanleSubmit,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
