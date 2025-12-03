import React, { useState, useEffect, useRef, useCallback } from 'react';

interface ContextMenuPosition {
  x: number;
  y: number;
}

const ContextMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [position, setPosition] = useState<ContextMenuPosition>({ x: 0, y: 0 });
  const contextMenuRef = useRef<HTMLDivElement>(null);
  const clickableBoxRef = useRef<HTMLDivElement>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default browser context menu
    setIsVisible(true);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      contextMenuRef.current &&
      !contextMenuRef.current.contains(event.target as Node) &&
      clickableBoxRef.current &&
      !clickableBoxRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('contextmenu', handleClickOutside); // Also close if another right click happens
    } else {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('contextmenu', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('contextmenu', handleClickOutside);
    };
  }, [isVisible, handleClickOutside]);

  const menuOptions = ['Edit', 'Delete', 'Refresh'];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Right-Click Context Menu Demo</h2>
      <div
        ref={clickableBoxRef}
        onContextMenu={handleContextMenu}
        className="bg-blue-100 border-2 border-blue-400 p-8 rounded-lg shadow-md cursor-context-menu select-none
                   text-xl font-semibold text-blue-800 w-80 h-48 flex items-center justify-center text-center"
      >
        Right-Click Here
      </div>

      {isVisible && (
        <div
          ref={contextMenuRef}
          className="absolute bg-white border border-gray-300 rounded-md shadow-lg py-1 z-50 min-w-[120px]"
          style={{ top: position.y, left: position.x }}
        >
          {menuOptions.map((option) => (
            <div
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800 text-sm"
              onClick={() => {
                // No actions needed per SRS, just close the menu
                setIsVisible(false);
                // console.log(`${option} clicked`);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContextMenu;