import { createContext, useContext, useState, useEffect } from "react";
import App from "./App";

const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersdarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  return prefersdarkMode;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode);
  const [searchImage, setSearchImage] = useState("dinosaur");

  const toggleDarkTheme = () => {
    let newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newDarkTheme);
  };
  useEffect(()=>{
    document.body.classList.toggle('dark-theme', isDarkTheme)
  },[])

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchImage, setSearchImage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
