import { HeaderPropType } from "@/components/layout/header/type";
import Logo from "@/components/common/Logo";

const HeaderView : React.FC<HeaderPropType> = ({menu, isFix}) => {
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
            <a href="#">Login</a>
          </li>
          <li className="Header__mymenu-item">
            <a href="#">Join</a>
          </li>
          <li className="Header__mymenu-item">
            <a href="#">search</a>
          </li>
          <li className="Header__mymenu-item">
            <a href="#">like</a>
          </li>
          <li className="Header__mymenu-item">
            <a href="#">cart</a>
          </li>
       </ul>
      </div>
    </header>
  )
}

export default HeaderView;