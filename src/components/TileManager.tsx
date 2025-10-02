import React from 'react';
import { useTileManager } from '../hooks/useTileManager';

interface TileManagerProps {
  terminalComponent: React.ReactNode;
  contentComponent?: React.ReactNode;
}

const TileManager: React.FC<TileManagerProps> = ({ terminalComponent, contentComponent }) => {
  const { tileState } = useTileManager();

  return (
    <div className="h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
      {/* Vault-Tec Terminal Housing */}
      <div className="relative">
        {/* Main Terminal Chassis */}
        <div className="w-full max-w-6xl bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 border-4 border-gray-600 shadow-2xl relative" 
             style={{ 
               background: 'linear-gradient(145deg, #1e3a8a 0%, #1e40af 20%, #1d4ed8 50%, #1e40af 80%, #1e3a8a 100%)',
               borderRadius: '8px 8px 4px 4px'
             }}>
          
          {/* Vault-Tec Logo Area */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 px-4 py-1 border-2 border-gray-700 shadow-lg"
               style={{ borderRadius: '4px' }}>
            <div className="text-blue-900 font-bold text-sm tracking-wider">VAULT-TEC</div>
          </div>

          {/* Top Control Panel */}
          <div className="bg-gray-700 border-b-2 border-gray-600 p-2 flex justify-between items-center">
            <div className="flex space-x-2">
              {/* Status Indicators */}
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-70"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full opacity-30"></div>
            </div>
            <div className="text-gray-300 text-xs font-mono tracking-wider">
              ROBCO INDUSTRIES TERMLINK v2.1.7
            </div>
            <div className="flex space-x-1">
              {/* Toggle Switches */}
              <div className="w-4 h-6 bg-gray-800 border border-gray-600 relative">
                <div className="absolute top-1 left-1 w-2 h-2 bg-green-400 rounded-sm"></div>
              </div>
              <div className="w-4 h-6 bg-gray-800 border border-gray-600 relative">
                <div className="absolute bottom-1 left-1 w-2 h-2 bg-gray-500 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* CRT Screen Housing */}
          <div className="p-6 bg-gradient-to-b from-gray-800 to-gray-900">
            {/* CRT Screen Bezel */}
            <div className="bg-black border-4 border-gray-700 shadow-inner relative overflow-hidden"
                 style={{ 
                   borderRadius: '12px',
                   background: 'radial-gradient(ellipse at center, #000000 60%, #0a0a0a 100%)'
                 }}>
              
              {/* CRT Glow Effect */}
              <div className="absolute inset-0 bg-green-400 opacity-5 blur-sm"></div>
              
              {/* Screen Content */}
              <div className="relative h-96 flex overflow-hidden" style={{ minHeight: '500px' }}>
                {/* Terminal Tile */}
                <div className={`transition-all duration-500 ease-in-out ${tileState.terminalWidth}`}>
                  <div className="h-full border-r border-green-900 border-opacity-30">
                    {terminalComponent}
                  </div>
                </div>

                {/* Content Tile */}
                {tileState.showContent && (
                  <div className={`transition-all duration-500 ease-in-out ${tileState.contentWidth}`}>
                    <div className="h-full bg-white overflow-y-auto">
                      {contentComponent}
                    </div>
                  </div>
                )}
              </div>

              {/* CRT Scanlines Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-20"
                   style={{
                     background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.1) 2px, rgba(0,255,65,0.1) 4px)'
                   }}>
              </div>
            </div>
          </div>

          {/* Holotape Drive */}
          <div className="px-6 pb-4">
            <div className="bg-gray-800 border-2 border-gray-600 h-4 relative">
              <div className="absolute left-2 top-1 text-gray-400 text-xs font-mono">HOLOTAPE</div>
              <div className="absolute right-2 top-1 w-8 h-2 bg-gray-700 border border-gray-600"></div>
            </div>
          </div>

          {/* Mechanical Keyboard */}
          <div className="bg-gray-700 border-t-2 border-gray-600 p-4">
            <div className="grid grid-cols-12 gap-1">
              {/* Top Row */}
              {['1','2','3','4','5','6','7','8','9','0','-','='].map((key, i) => (
                <div key={i} className="bg-gray-600 border-2 border-gray-500 h-8 flex items-center justify-center text-gray-200 text-xs font-mono shadow-inner">
                  {key}
                </div>
              ))}
              
              {/* QWERTY Row */}
              {['Q','W','E','R','T','Y','U','I','O','P','[',']'].map((key, i) => (
                <div key={i} className="bg-gray-600 border-2 border-gray-500 h-8 flex items-center justify-center text-gray-200 text-xs font-mono shadow-inner">
                  {key}
                </div>
              ))}
              
              {/* ASDF Row */}
              {['A','S','D','F','G','H','J','K','L',';',"'",'\\'].map((key, i) => (
                <div key={i} className="bg-gray-600 border-2 border-gray-500 h-8 flex items-center justify-center text-gray-200 text-xs font-mono shadow-inner">
                  {key}
                </div>
              ))}
              
              {/* Bottom Row */}
              {['Z','X','C','V','B','N','M',',','.','/','',''].map((key, i) => (
                <div key={i} className={`bg-gray-600 border-2 border-gray-500 h-8 flex items-center justify-center text-gray-200 text-xs font-mono shadow-inner ${i >= 10 ? 'opacity-50' : ''}`}>
                  {key}
                </div>
              ))}
              
              {/* Spacebar */}
              <div className="col-span-6 bg-gray-600 border-2 border-gray-500 h-8 flex items-center justify-center text-gray-200 text-xs font-mono shadow-inner">
                SPACE
              </div>
              <div className="col-span-6"></div>
            </div>
          </div>

          {/* Bottom Chassis Details */}
          <div className="bg-gray-800 border-t border-gray-600 p-2 flex justify-between items-center text-xs text-gray-400 font-mono">
            <div>MODEL: VT-2077-TERM</div>
            <div>VAULT-TEC CORP.</div>
            <div>SER: VT-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</div>
          </div>

          {/* Side Vents */}
          <div className="absolute left-2 top-20 space-y-1">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-1 h-8 bg-gray-900 border-l border-gray-600"></div>
            ))}
          </div>
          <div className="absolute right-2 top-20 space-y-1">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-1 h-8 bg-gray-900 border-r border-gray-600"></div>
            ))}
          </div>

          {/* Corner Bolts */}
          <div className="absolute top-2 left-2 w-3 h-3 bg-gray-600 rounded-full border-2 border-gray-500"></div>
          <div className="absolute top-2 right-2 w-3 h-3 bg-gray-600 rounded-full border-2 border-gray-500"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 bg-gray-600 rounded-full border-2 border-gray-500"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-gray-600 rounded-full border-2 border-gray-500"></div>
        </div>

        {/* Terminal Base/Stand */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-blue-800 to-blue-900 border-2 border-gray-600 shadow-lg"
             style={{ borderRadius: '0 0 8px 8px' }}>
          <div className="absolute inset-2 bg-gray-700 border border-gray-600" style={{ borderRadius: '2px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default TileManager;
