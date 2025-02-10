import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const setTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    const addDark = () => document.documentElement.classList.add("dark");
    const removeDark = () => document.documentElement.classList.remove("dark");

    if (storedTheme && storedTheme === "dark") {
      addDark();
    } else {
      removeDark();
    }
  };

  useEffect(() => {
    setTheme();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("useTheme should be used within ThemeProvider");
  return context;
};

export default ThemeProvider;
