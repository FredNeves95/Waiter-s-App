import { useEffect, useState } from "react";

export const useHandleTheme = () => {
  const chosenTheme = localStorage.getItem("theme");

  const [theme, setTheme] = useState(() => {
    if (chosenTheme) {
      return chosenTheme;
    }
    return "dark";
  });

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, handleTheme };
};
