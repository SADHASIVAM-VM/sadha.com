import React, { useState, useEffect } from 'react';
import './CustomCursor.css'; // Import your CSS for styling

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
    ></div>
  );
};

export default CustomCursor;