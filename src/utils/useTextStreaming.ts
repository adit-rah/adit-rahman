import { useState, useEffect } from 'react';

interface UseTextStreamingOptions {
  text: string;
  speed?: number;
  startDelay?: number;
  enabled?: boolean;
}

export const useTextStreaming = ({ 
  text, 
  speed = 50, 
  startDelay = 0,
  enabled = true 
}: UseTextStreamingOptions) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setDisplayedText(text);
      setIsComplete(true);
      return;
    }

    setDisplayedText('');
    setIsComplete(false);

    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay, enabled]);

  return { displayedText, isComplete };
};

export default useTextStreaming;
