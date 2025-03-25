import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center gap-2">
      <Sun className="w-5 h-5 text-yellow-500 dark:text-gray-400" />
      <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
      <Moon className="w-5 h-5 text-gray-600 dark:text-white" />
    </div>
  );
}
