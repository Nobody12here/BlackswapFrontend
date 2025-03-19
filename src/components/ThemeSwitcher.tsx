import { useState, useEffect } from "react";
import { IoMoon } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="flex items-center w-8 h-8 justify-center border border-black/40 dark:border-white/40 rounded-full text-black dark:text-white"
      >
        {theme === "light" ? <IoMoon size={16} /> : <MdOutlineWbSunny size={16} />}
      </button>
    </div>
  );
}
