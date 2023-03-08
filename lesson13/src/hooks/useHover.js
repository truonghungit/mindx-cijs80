import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    console.log(elementRef);
    if (!element) {
      return;
    }

    const handleMouseEnter = () => {
      console.log("handleMouseEnter");
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      console.log("handleMouseLeave");
      setIsHovered(false);
    };

    console.log("dang ky su kien");
    element.addEventListener("mouseenter", handleMouseEnter);

    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  return [isHovered, elementRef];
}
