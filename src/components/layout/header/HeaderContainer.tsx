'use client'

import HeaderView from "@/components/layout/header/HeaderView"
import { MenuType } from "@/components/layout/header/type";
import { useEffect,  useState } from "react";
import useResize from "@/hooks/useResize";
import useScroll from "@/hooks/useScroll";

const HeaderContainer = () => {
  const scroll = useScroll();
  const [isFix, setIsFix] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const size = useResize();

  // FUNCTION 스크롤 80 이상 헤더 고정
  useEffect(()=>{
    if (scroll.scroll >= 80){
      setIsFix(true);
    } else{
      setIsFix(false);
    }    
  },[scroll.scroll]);

  // FUNCTION 981px 이상일 때 모바일 메뉴 자동 닫기
  useEffect(()=>{
    if (!size.width) return;

    if(size.width > 980){
      setCloseMenu();
    }    
  },[size.width]);

  // FUNCTION 모바일 메뉴 열기 / 닫기
  const setOpenMenu = () => {
    setIsOpen(true);
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
  } 

  const setCloseMenu = () => {
    setIsOpen(false);
    document.body.style.height = 'auto';
    document.body.style.overflow = 'unset';
  }

  // FUNCTION 모바일 메뉴 바깥쪽 배경 클릭 시 닫기
  const onClickBg = (e : React.MouseEvent) =>  {
    if (e.target === e.currentTarget){
      setCloseMenu();
    }
  }

  const menu : MenuType[] = [
    {link: '#', title: 'ABOUT'},
    {link: '#', title: 'NEW'},
    {link: '#', title: 'SHOP'},
    {link: '#', title: 'EVENT'},
    {link: '#', title: 'COMMUNITY'},
    {link: '#', title: 'WALLPAPER'}
  ];

  return(
    <HeaderView 
    menu={menu} 
    isFix={isFix} 
    isOpen={isOpen} 
    onClickMenu={setOpenMenu} 
    onClickClose={setCloseMenu}
    onClickBg={onClickBg}
    />
  )
}

export default HeaderContainer;