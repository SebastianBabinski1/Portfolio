import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./App.module.scss";
import utilsStyles from "./styles/utils.module.scss";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import { AnimatePresence } from "framer-motion";

const currentDarkTheme =
  localStorage.getItem("darkTheme") === "true" ? true : false;
export const ThemeContext = React.createContext(currentDarkTheme);

function App() {
  const location = useLocation();

  const [darkTheme, setDarkTheme] = useState(currentDarkTheme);

  const toggleTheme = () => {
    if (darkTheme) {
      localStorage.setItem("darkTheme", "false");
      setDarkTheme(false);
      console.log("now is white");
    } else {
      localStorage.setItem("darkTheme", "true");
      setDarkTheme(true);
      console.log("now is dark");
    }
  };

  const InsideContent = () => {
    if (location.pathname === "/resume") {
      return <Resume />;
    } else if (location.pathname === "/projects") {
      return <Projects />;
    } else {
      return <About />;
    }
  };

  const body = document.getElementById("body") as HTMLElement;
  darkTheme
    ? body.classList.add(styles.dark)
    : body.classList.remove(styles.dark);

  return (
    <ThemeContext.Provider value={darkTheme}>
      <div className={styles.app}>
        <div
          className={`${styles.sidebar} ${darkTheme && utilsStyles.dark500}`}
        >
          <Sidebar toggleTheme={toggleTheme} />
        </div>
        <div
          className={`${
            darkTheme ? utilsStyles.dark500 : utilsStyles.lightDefault
          } ${styles.content} `}
        >
          <Navbar />
          <InsideContent />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
