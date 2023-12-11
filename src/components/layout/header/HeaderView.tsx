import { HeaderPropType } from "@/components/layout/header/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "@/components/common/Logo";
import { faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";


const HeaderView : React.FC<HeaderPropType> = ({menu, isFix, isOpen}) => {
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
       <nav className="Header__menu" data-open={isOpen}>
          <ul className="Header__menu-list">
            {
              menu.map((el,idx) => 
                <li className="Header__menu-item" key={el.title+idx}>
                  <a href={el.link}>{el.title}</a>
                </li>
              )
            }
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
       <button className="Header__menu-btn">
        <FontAwesomeIcon icon={faBars}/>
       </button>
      </div>
    </header>
  )
}

export default HeaderView;