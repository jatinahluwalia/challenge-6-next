"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
const Switcher = () => {
  const { theme, setTheme } = useTheme();
  const handleDark = () => setTheme("dark");
  const handleLight = () => setTheme("light");
  return (
    <>
      {theme === "dark" ? (
        <Image
          src={"/images/icon-sun.svg"}
          alt="sun"
          width={30}
          height={30}
          role="button"
          onClick={handleLight}
        />
      ) : (
        <Image
          src={"/images/icon-moon.svg"}
          alt="sun"
          width={30}
          height={30}
          role="button"
          onClick={handleDark}
        />
      )}
    </>
  );
};

export default Switcher;
