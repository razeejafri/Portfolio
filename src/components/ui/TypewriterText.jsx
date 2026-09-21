import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TypewriterText({
  words = ['Hello world!', 'Welcome to my space!', 'Glad you are here!'],
  typingSpeed = 85,
  deletingSpeed = 40,
  pauseDelay = 2200,
  emptyDelay = 450,
  className = '',
  cursorClassName = '',
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];
    let timeoutId;

    if (!isDeleting) {
      // Typing phase
      if (displayedText.length < currentWord.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Pausing after fully typing
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDelay);
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        // Pausing on empty before next word
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, emptyDelay);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDelay, emptyDelay]);

  return (
    <span className={`inline-flex items-center select-none ${className}`}>
      <span>{displayedText}</span>
      <motion.span
        aria-hidden="true"
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className={`inline-block w-[3px] h-[0.85em] ml-1 bg-[#C84B31] rounded-full shadow-[0_0_8px_rgba(200,75,49,0.4)] ${cursorClassName}`}
      />
    </span>
  );
}
