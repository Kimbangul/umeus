import { useState, useEffect, useRef, MutableRefObject } from 'react';

const useInterSectionObserver = (target: MutableRefObject<HTMLElement|null>, option?: IntersectionObserver | undefined) => {
  const [isView, setIsView] = useState(false);
  const [isViewRatio, setIsViewRatio] = useState(0);
  const observerRef = useRef<null|IntersectionObserver>(null);

  useEffect(() => {
    if (!observerRef.current) {
      const observerCallback = (observeArr: IntersectionObserverEntry[]) => {
        observeArr.forEach((el) => {
          setIsViewRatio(el.intersectionRatio);
          if (el.isIntersecting) {
            setIsView(true);
          } else {
            setIsView(false);
          }
        });
      }
     
      observerRef.current = new IntersectionObserver(observerCallback, option);
    }
    if (target.current) {
      observerRef.current.observe(target.current);
    }

    return (() => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      return;
    })
  }, [target, option]);

  return { isView, isViewRatio };
}

export default useInterSectionObserver;