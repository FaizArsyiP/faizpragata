"use client";

import { useEffect, useState } from "react";

const DEFAULT_TEXTS = [
  "Information Technology Student",
  "Welcome to My Portfolio!",
];

export default function TypewriterText({ texts = DEFAULT_TEXTS, className = "" }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeout;

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 3500);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 1000);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentTextIndex, isDeleting, texts]);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayedText}
      <span
        className={`inline-block w-2 h-0.5 bg-current ml-0.5 transition-opacity duration-100 ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />
    </span>
  );
}
