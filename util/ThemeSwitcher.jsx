import React, { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
const ThemeSwitcher = () => {
  const [light, setLight] = useState(true);
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      light ? "light" : "dark"
    );
  }, [light]);
  const handleSwitch = () => {
    setLight(!light);
  };

  return (
    <button onClick={handleSwitch}>
      {light ? (
        <CiLight className="text-3xl mr-4" />
      ) : (
        <CiDark className="text-3xl mr-4" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
