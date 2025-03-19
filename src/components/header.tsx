import Link from "next/link";
import { useState, useEffect } from "react";
import { ConnectWalletMenu } from "./connect-wallet-menu";
import { DarkModeToggle } from "./dark-mode-toggle";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleThemeToggle = () => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <header className="py-2 flex justify-between items-center pt-6">
      <Link href={"/"}>
        <img
          src={!isDarkMode ? "buena-dark.svg" : "buena-light.svg"} // Change logo based on theme
          alt="Buena Logo"
          className="w-48 h-auto object-contain"
        />
      </Link>
      <div className="flex gap-10 items-center">
        <Link href={"/"} className="text-lg hover:opacity-80">
          <h3>Home</h3>
        </Link>

        <Link href={"/create-rfp"} className="text-lg hover:opacity-80">
          <h3>Create RFP</h3>
        </Link>

        <ConnectWalletMenu />
        <DarkModeToggle onToggle={handleThemeToggle} isDarkMode={isDarkMode} />
      </div>
    </header>
  );
};
