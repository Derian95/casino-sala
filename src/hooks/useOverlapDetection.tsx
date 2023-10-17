import { useEffect, useState, RefObject } from 'react';

const useOverlapDetection = (ref1: RefObject<HTMLElement>, ref2: RefObject<HTMLElement>,ref3: RefObject<HTMLElement>) => {
  const [isDiv1OnTop, setIsDiv1OnTop] = useState(false);

  useEffect(() => {
    const div1 = ref1.current;
    const div2 = ref2.current;
    const boxScrollRef = ref3.current;
    const checkOverlap = () => {
     
  
      if (div1 && div2) {
        const rect1 = div1.getBoundingClientRect();
        const rect2 = div2.getBoundingClientRect();
  
        const isOverlap =
          rect1.top < rect2.bottom &&
          rect1.bottom > rect2.top &&
          rect1.left < rect2.right &&
          rect1.right > rect2.left;
  
        setIsDiv1OnTop(isOverlap);
      }
    };
  
    const containerElement = boxScrollRef;
  
    if (containerElement) {
      containerElement.addEventListener('scroll', checkOverlap);
    }
  
    return () => {
      if (containerElement) {
        containerElement.removeEventListener('scroll', checkOverlap);
      }
    };
  }, []);

  return isDiv1OnTop;
};


export default useOverlapDetection;