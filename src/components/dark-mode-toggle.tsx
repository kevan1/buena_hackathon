import { useState, useEffect } from "react";

interface DarkModeToggleProps {
  onToggle: () => void;
  isDarkMode: boolean;
}

export const DarkModeToggle = ({ onToggle, isDarkMode }: DarkModeToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
    >
      {isDarkMode ? "🌙" : "☀️"}
    </button>
  );
};