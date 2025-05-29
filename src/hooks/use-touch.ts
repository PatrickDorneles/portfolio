import { useEffect, useState } from "react";

export function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const handleTouchStart = () => setIsTouch(true);
    const handleMouseMove = () => setIsTouch(false);

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return isTouch;
}
