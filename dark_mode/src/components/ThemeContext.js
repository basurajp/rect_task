import { createContext, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = () => {
    const [isDarkMode, setisDarkMode] = useState(false)
};
