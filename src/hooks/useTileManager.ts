import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface TileState {
  showContent: boolean;
  contentPath: string;
  terminalWidth: string;
  contentWidth: string;
}

export const useTileManager = () => {
  const [tileState, setTileState] = useState<TileState>({
    showContent: false,
    contentPath: '',
    terminalWidth: 'w-full',
    contentWidth: 'w-0'
  });
  
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    
    if (currentPath === '/') {
      // Home route - terminal only
      setTileState({
        showContent: false,
        contentPath: '',
        terminalWidth: 'w-full',
        contentWidth: 'w-0'
      });
    } else {
      // Other routes - split screen
      setTileState({
        showContent: true,
        contentPath: currentPath,
        terminalWidth: 'w-1/2',
        contentWidth: 'w-1/2'
      });
    }
  }, [location.pathname]);

  const closeTile = () => {
    setTileState(prev => ({
      ...prev,
      showContent: false,
      terminalWidth: 'w-full',
      contentWidth: 'w-0'
    }));
  };

  const openTile = (path: string) => {
    setTileState({
      showContent: true,
      contentPath: path,
      terminalWidth: 'w-1/2',
      contentWidth: 'w-1/2'
    });
  };

  return {
    tileState,
    closeTile,
    openTile
  };
};
