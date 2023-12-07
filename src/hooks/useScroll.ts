import { debounce } from 'lodash';
import { useState, useEffect, useCallback } from 'react';

const useScroll = () => {
  const [scroll, setScroll] = useState<number>(0);
  const [prevScroll, setPrevScroll] = useState<number>(0);
  const [scrollDir, setScrollDir] = useState<'up' | 'down' | 'top'>('top');
  const [isTop, setIsTop] = useState<boolean>(false);

  // FUNCTION 현재 스크롤 저장
  const onScrollDoc = () => {
    setScroll(document.scrollingElement?.scrollTop || 0);
  };

  //  FUNCTION 스크롤 감지
  useEffect(() => {
    if (!document) return;
     getIsScrollTop();
    document.addEventListener('scroll', debounce(onScrollDoc, 300));
    return () => document.removeEventListener('scroll', debounce(onScrollDoc, 300));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // FUNCTION 스크롤 방향 설정
  useEffect(() => {
    getIsScrollTop();

    if (prevScroll < scroll) {
      setScrollDir('down');
    } else if (prevScroll > scroll) {
      setScrollDir('up');
    }
    setPrevScroll(scroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll, prevScroll]);

  //FUNCTION 최상단 감지
  const getIsScrollTop = useCallback(() => {
    if (scroll === 0) {      
      setIsTop(true);
    } else{
      setIsTop(false);
    }
  }, [scroll]);

  return { scroll, scrollDir, isTop };
};

export default useScroll;