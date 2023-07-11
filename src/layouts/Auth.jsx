import { useCallback } from "react";
import { Link, Outlet } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

// images
import logo from "../assets/images/logo.svg";

// contexts
import { useMode } from "../contexts/ModeProvider";

// utils
import { utilsToggleTheme } from "../utils/utils.js";

function Auth() {
  const { modeState, setModeState } = useMode();

  const toggleTheme = useCallback(() => {
    utilsToggleTheme();
    setModeState({ type: "toggle" });
  }, [setModeState]);

  return (
    <section className="h-screen">
      <Link to="/" className="fixed top-0 left-0">
        <img className="w-40" src={logo} alt="Opta's Logo" />
      </Link>
      <button
        onClick={toggleTheme}
        className="fixed top-1 right-1 icon-button z-20"
      >
        <FontAwesomeIcon icon={modeState.mode ? faSun : faMoon} />
      </button>
      <Outlet />
      <footer className="flex items-center justify-center w-full fixed z-20 bottom-1">
        <span className="dark:text-white">
          Opta {new Date().getFullYear()} &#169;
        </span>
      </footer>
    </section>
  );
}

export default Auth;
