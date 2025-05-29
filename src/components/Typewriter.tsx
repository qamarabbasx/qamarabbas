
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  delay?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ words, delay = 100, className = "" }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, words, delay]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      <span className="text-blue-500 font-semibold">{currentText}</span>
      <span className={`inline-block transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
        _
      </span>
    </span>
  );
};

export default Typewriter;
