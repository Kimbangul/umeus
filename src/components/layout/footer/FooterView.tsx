import Logo from "@/components/common/Logo";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterView = () => {
  return(
    <footer className="Footer">
       <div className="Footer__inner">
         <div className="Footer__logo">
          <Logo />
          <ul className="Footer__menu">
            <li className="Footer__menu-item"><a href="#">이용약관</a></li>
            <li className="Footer__menu-item"><a href="#">개인정보처리방침</a></li>
         </ul>
          </div>
          <div className="Footer__info-container">
          <div  className="Footer__about">
              <h2 className="Footer__title">About</h2>
              <ul className="Footer__list">
                <li className="Footer__item">
                  <span className="Footer__item-cate">상호명</span>
                  <span className="Footer__item-desc">유게더</span>
                </li>
                <li className="Footer__item">
                  <span className="Footer__item-cate">대표</span>
                  <span className="Footer__item-desc">정명호</span>
                </li>
              </ul>
              </div>  
              <div className="Footer__cs">
              <h2 className="Footer__title">CS Center</h2>
              <ul className="Footer__list">
                <li className="Footer__item">
                  <span className="Footer__item-cate">업무시간</span>
                  <span className="Footer__item-desc">월요일 - 토요일 (10:00 - 18:00)</span>
                </li>
                <li className="Footer__item">
                  <span className="Footer__item-cate">휴무</span>
                  <span className="Footer__item-desc">토요일,일요일,공휴일 쉬는날</span>
                </li>
              </ul>  
              </div>               
              <div className="Footer__bank">
                <h2 className="Footer__title">Bank info</h2>
                    <ul className="Footer__list">
                      <li className="Footer__item">
                      우리은행 / 1002-561-261969                   
                      </li>
                      <li className="Footer__item">
                      예금주 : 정명호                   
                      </li>                      
                    </ul>
                  </div>
            </div> 
        <div className="Footer__bottom">
              <ul className="Footer__sns Footer__menu">
              <li className="Footer__menu-item">
                {/* <a href="https://www.instagram.com/_umeus_/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a> */}
                <a href="https://www.instagram.com/_umeus_/" target="_blank">Instagram</a>
              </li>
              <li className="Footer__menu-item">            
                <a href="https://store.kakao.com/umsshop" target="_blank">Kakao store</a>
              </li>
              <li className="Footer__menu-item">            
                <a href="https://pf.kakao.com/_TlbVG" target="_blank">Kakaotalk chanel</a>
              </li>
              </ul>        
          <div className="Footer__copy">Copyright © 해피윰스데이.All rights reserved.</div>
        </div>
       </div>
    </footer>
  )
}

export default FooterView;