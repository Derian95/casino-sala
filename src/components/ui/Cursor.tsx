import { useEffect, useState } from "react";

interface CursorState {
    x: number;
    y: number;
  }
export const Cursor = () => {
    const [position, setPosition] = useState<CursorState>({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        setPosition({ x: event.clientX, y: event.clientY });
      };
  
      window.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  return (
    <div
    className="cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
  />
  )
}
