import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

const useResize = () => {
  const [windowSize, setWindowSize] = useState<SizeType>({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', debounce(handleResize, 300));
    handleResize(); // 초기 사이즈 반환
    return () => window.removeEventListener('resize', debounce(handleResize, 300));
  }, []);

  return windowSize;
};

export interface SizeType {
  width: number | undefined;
  height: number | undefined;
}

export default useResize;

