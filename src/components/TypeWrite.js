import { useState, useEffect, useMemo } from "react";

// Move texts outside component to prevent re-creation on every render
const TEXTS = [
  "Information Engineering Student",
  "Welcome to My Portfolio!"
];

export default function TypewriterText() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentText = TEXTS[currentTextIndex];
    let timeout;

    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        // Pause before deleting (shorter pause for faster loop)
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 3500);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, 50); // Much faster deleting for quicker loop
      } else {
        // Move to next text immediately (no pause)
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % TEXTS.length);
        }, 1000); // Small delay before next text starts
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentTextIndex, isDeleting]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="text-base sm:text-2xl font-bold text-slate-500">
      {displayedText}
      <span 
        className={`inline-block w-2 h-0.5 bg-white ml-0.5 transition-opacity duration-100 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />
    </span>
  );
}