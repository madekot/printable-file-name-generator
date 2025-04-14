import { useEffect, useRef } from "react";

export const useAutoFocus = <T extends HTMLElement>(shouldFocus = true) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!shouldFocus || !ref.current) return;
    const element = ref.current;
    element.focus();
    return () => {
      if (document.activeElement === element) {
        element.blur();
      }
    };
  }, [shouldFocus]);

  return { ref };
};
