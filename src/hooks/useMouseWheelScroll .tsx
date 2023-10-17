import { useEffect, RefObject } from 'react';

const useMouseWheelScroll = (boxScrollRef: RefObject<HTMLElement>) => {
  useEffect(() => {

    const widthScreen = window.innerWidth;
    console.log(widthScreen)
  
    const handleMouseWheel = (e: WheelEvent) => {
      const race = widthScreen*0.25; // How many pixels to scroll

      if (e.deltaY > 0) {
        // Scroll right
        if (boxScrollRef.current) {
          boxScrollRef.current.scrollLeft += race;
        }
      } else {
        // Scroll left
        if (boxScrollRef.current) {
          boxScrollRef.current.scrollLeft -= race;
        }
      }
      e.preventDefault();
    };

    const boxScrollElement = boxScrollRef.current;

    if (boxScrollElement) {
      boxScrollElement.addEventListener('wheel', handleMouseWheel);
    }

    return () => {
      if (boxScrollElement) {
        boxScrollElement.removeEventListener('wheel', handleMouseWheel);
      }
    };
  }, []);
};

export default useMouseWheelScroll;
