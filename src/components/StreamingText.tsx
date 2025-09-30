import React from 'react';
import { useTextStreaming } from '../utils/useTextStreaming';

interface StreamingTextProps {
  text: string;
  speed?: number;
  startDelay?: number;
  enabled?: boolean;
  className?: string;
  showCursor?: boolean;
}

const StreamingText: React.FC<StreamingTextProps> = ({
  text,
  speed = 30,
  startDelay = 0,
  enabled = true,
  className = '',
  showCursor = true
}) => {
  const { displayedText, isComplete } = useTextStreaming({
    text,
    speed,
    startDelay,
    enabled
  });

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && showCursor && (
        <span className="text-terminal-green animate-pulse">█</span>
      )}
    </span>
  );
};

export default StreamingText;
