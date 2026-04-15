import { useEffect, useState } from "react";

interface TypingOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export function useTypingEffect({
  words,
  typeSpeed = 80,
  deleteSpeed = 45,
  pauseDuration = 1800,
}: TypingOptions): string {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex % words.length];

    const tick = () => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setDisplayed(currentWord.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        if (charIndex > 0) {
          setDisplayed(currentWord.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((w) => (w + 1) % words.length);
        }
      }
    };

    const delay = isDeleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [
    charIndex,
    isDeleting,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    pauseDuration,
  ]);

  return displayed;
}
