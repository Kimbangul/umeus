'use client'

import HeaderView from "@/components/layout/header/HeaderView"
import { MenuType } from "@/components/layout/header/type";
import { useEffect, useRef, useState } from "react";
import useScroll from "@/hooks/useScroll";

const HeaderContainer = () => {
  const scroll = useScroll();
  const [isFix, setIsFix] = useState(false);

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
    <HeaderView menu={menu} isFix={isFix}/>
  )
}

export default HeaderContainer;