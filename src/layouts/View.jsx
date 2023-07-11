import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";

// components
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function View() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setEntered(true);
      document.body.style.overflow = "auto";
    }, [500]);
  }, []);

  return (
    <section
      className={`entrance ${entered ? "overflow-auto" : "overflow-hidden"}`}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default View;
