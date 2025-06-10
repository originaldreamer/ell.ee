// src/hooks/useIsTouchDevice.js
import { useState, useEffect } from 'react';

export default function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const hasTouchAPI =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    const mq = window.matchMedia('(pointer: coarse)');
    const update = () => setIsTouch(hasTouchAPI || mq.matches);

    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return isTouch;
}
