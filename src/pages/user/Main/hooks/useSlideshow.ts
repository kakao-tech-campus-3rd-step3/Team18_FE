import { useState, useEffect } from 'react';

export const useSlideshow = (count: number, delay: number = 3000) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % count);
    }, delay);

    return () => clearInterval(interval);
  }, [count, delay]);

  return index;
};
