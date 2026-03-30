import { useState, useEffect, useRef } from 'react';

export const useKeyboardVisible = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const initialHeightRef = useRef(window.innerHeight);

  useEffect(() => {
    const viewport = window.visualViewport;
    if (!viewport) return;

    const handleResize = () => {
      setIsKeyboardVisible(viewport.height < initialHeightRef.current * 0.75);
    };

    viewport.addEventListener('resize', handleResize);
    handleResize();
    return () => viewport.removeEventListener('resize', handleResize);
  }, []);

  return isKeyboardVisible;
};
