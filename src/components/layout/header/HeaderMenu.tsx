import { HeaderMenuPropType } from "@/components/layout/header/type";

const HeaderMenu : React.FC<HeaderMenuPropType> = ({menu}) => {
  return (
   <>
       {
              menu.map((el,idx) => 
                <li className="Header__menu-item" key={el.title+idx}>
                  <a href={el.link}>{el.title}</a>
                </li>
              )
         }
   </>
  )
}

export default HeaderMenu;