import HeaderView from "@/components/layout/header/HeaderView"
import { MenuType } from "@/components/layout/header/type";
import { useRef } from "react";
import useInterSectionObserver from "@/hooks/useInterSectionObserver";

const HeaderContainer = () => {
  const headerRef = useRef();

  const menu : MenuType[] = [
    {link: '#', title: 'ABOUT'},
    {link: '#', title: 'NEW'},
    {link: '#', title: 'SHOP'},
    {link: '#', title: 'EVENT'},
    {link: '#', title: 'COMMUNITY'},
    {link: '#', title: 'WALLPAPER'}
  ];

  return(
    <HeaderView menu={menu}/>
  )
}

export default HeaderContainer;