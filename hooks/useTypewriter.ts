'use client';

import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 1800,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
      const deleteTimer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
      return () => clearTimeout(deleteTimer);
    }

    if (displayText === currentWord) {
      setIsPaused(true);
      return;
    }

    const typeTimer = setTimeout(() => {
      setDisplayText(currentWord.slice(0, displayText.length + 1));
    }, typingSpeed);

    return () => clearTimeout(typeTimer);
  }, [displayText, currentWordIndex, isDeleting, isPaused, words, typingSpeed, deletingSpeed, pauseDuration]);

  return { displayText, isTyping: !isPaused };
}
