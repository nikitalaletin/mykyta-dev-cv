import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <Button
      onClick={onToggle}
      variant="outline"
      size="icon"
      className="fixed top-4 right-4 z-50 rounded-full shadow-lg print:hidden"
      aria-label="Перемкнути тему"
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}
