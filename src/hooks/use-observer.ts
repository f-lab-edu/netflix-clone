import { MutableRefObject, useEffect } from "react";

export const useObserver = ({
  target,
  rootMargin = "0px",
  root = null,
  threshold = 1.0,
  onIntersect,
}: {
  target: MutableRefObject<HTMLDivElement | null>;
  onIntersect: (entries: IntersectionObserverEntry[]) => void;
  rootMargin?: string;
  root?: Element | null;
  threshold?: number | number[];
}) => {
  useEffect(() => {
    let observer: IntersectionObserver;
    if (target && target.current) {
      observer = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold,
      });
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [target, rootMargin, threshold]);
};
