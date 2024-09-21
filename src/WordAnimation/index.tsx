import React, { useEffect, useState } from 'react';
import s from './WordAnimation.module.scss';
import { WordAnimationProps } from './types';
import clsx from 'clsx';

const WordAnimation: React.FC<WordAnimationProps> = ({
  text = '',
  className = '',
  wordClassName = '',
}) => {
  const words = text.split(' ');
  const [visibleWords, setVisibleWords] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWords((prev) => (prev < words.length ? prev + 1 : prev));
    }, 50);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={clsx(s.root, className)}>
      {words.map((word, index) => (
        <span
          key={index}
          className={clsx(
            s.word,
            index < visibleWords ? s.visible : s.hidden,
            wordClassName
          )}
        >
          {word}
        </span>
      ))}
    </span>
  );
};

export default WordAnimation;
