import { HeaderPropType } from "@/components/layout/header/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "@/components/common/Logo";
import { faSearch, faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import HeaderMenu from "@/components/layout/header/HeaderMenu";


const HeaderView : React.FC<HeaderPropType> = ({menu, isFix, isOpen, onClickMenu, onClickClose}) => {
  return(
    <header className="Header" data-fix={isFix}>
      <h1 className="sound-only">해피윰스데이</h1>  
      <div className="Header__top">
        <Logo />
      </div>
      <div className={`Header__inner`} >
        <div className="Header__logo">
        <Logo />
        </div>
       <nav className="Header__menu">
          <ul className="Header__menu-list">
           <HeaderMenu menu={menu}/>
          </ul>
       </nav>
       <ul className="Header__mymenu">          
          <li className="Header__mymenu-item">
            <a href="#"><FontAwesomeIcon icon={faSearch}/></a>
          </li>
          <li className="Header__mymenu-item">
            <a href="#"><FontAwesomeIcon icon={faHeart}/></a>
          </li>
          <li className="Header__mymenu-item">
            <a href="#"><FontAwesomeIcon icon={faCartShopping}/></a>
          </li>
          <li className="Header__mymenu-item">
            <a href="#">LOGIN</a>
          </li>
       </ul>
       <button className="Header__menu-btn" onClick={onClickMenu}>
        <FontAwesomeIcon icon={faBars}/>
       </button>
      </div>
      <div className="Header__mb-menu" data-open={isOpen}>
        <div className="Header__mb-menu-inner">
          <button className="Header__menu-btn--close" onClick={onClickClose}><FontAwesomeIcon icon={faXmark}/></button>
        <nav className="Header__menu">
            <ul className="Header__menu-list">
            <HeaderMenu menu={menu}/>
            </ul>
        </nav>
        <ul className="Header__mymenu">          
            <li className="Header__mymenu-item">
              <a href="#"><FontAwesomeIcon icon={faSearch}/></a>
            </li>
            <li className="Header__mymenu-item">
              <a href="#"><FontAwesomeIcon icon={faHeart}/></a>
            </li>
            <li className="Header__mymenu-item">
              <a href="#"><FontAwesomeIcon icon={faCartShopping}/></a>
            </li>
            <li className="Header__mymenu-item">
              <a href="#">LOGIN</a>
            </li>
        </ul>
        </div>
      </div>
    </header>
  )
}

export default HeaderView;