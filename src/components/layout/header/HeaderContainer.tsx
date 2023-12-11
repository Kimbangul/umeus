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

  useEffect(()=>{
    if (scroll.scroll >= 80){
      setIsFix(true);
    } else{
      console.log(scroll.scroll);
      setIsFix(false);
    }    
  },[scroll.scroll])

  const menu : MenuType[] = [
    {link: '#', title: 'ABOUT'},
    {link: '#', title: 'NEW'},
    {link: '#', title: 'SHOP'},
    {link: '#', title: 'EVENT'},
    {link: '#', title: 'COMMUNITY'},
    {link: '#', title: 'WALLPAPER'}
  ];

  return(
    <HeaderView menu={menu} isFix={isFix} isOpen={isOpen}/>
  )
}

export default HeaderContainer;