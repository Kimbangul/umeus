import Logo from "@/components/common/Logo";
import { FooterPropType } from "./type";

const FooterView : React.FC<FooterPropType>= ({menu, about, cs, bank,sns, copy}) => {
  return(
    <footer className="Footer">
       <div className="Footer__inner">
         <div className="Footer__logo">
          <Logo />
          <ul className="Footer__menu">
            {
              menu.map((el,idx)=>
              <li className="Footer__menu-item" key={el.title}><a href={el.link}>{el.title}</a></li>
              )
            }
         </ul>
          </div>
          <div className="Footer__info-container">
          <div  className="Footer__about">
              <h2 className="Footer__title">About</h2>
              <ul className="Footer__list">
                {
                  about.map((el,idx)=>
                  <li className="Footer__item" key={`about${el.title}`}>
                    <span className="Footer__item-cate">{el.title}</span>
                    <span className="Footer__item-desc">{el.desc}</span>
                  </li>
                  )
                }
              </ul>
              </div>  
              <div className="Footer__cs">
              <h2 className="Footer__title">CS Center</h2>
              <ul className="Footer__list">
              {
                  cs.map((el,idx)=>
                  <li className="Footer__item" key={`cs${el.title}`}>
                    <span className="Footer__item-cate">{el.title}</span>
                    <span className="Footer__item-desc">{el.desc}</span>
                  </li>
                  )
                }
              </ul>  
              </div>               
              <div className="Footer__bank">
                <h2 className="Footer__title">Bank info</h2>
                    <ul className="Footer__list">
                    {
                        bank.map((el,idx)=>
                        <li className="Footer__item" key={`bank${el.title}`}>
                          <span className="Footer__item-cate">{el.title}</span>
                          <span className="Footer__item-desc">{el.desc}</span>
                        </li>
                        )
                      }                
                    </ul>
                  </div>
            </div> 
        <div className="Footer__bottom">
              <ul className="Footer__sns Footer__menu">
                {
                        sns.map((el,idx)=>
                        <li className="Footer__menu-item" key={el.title + idx}>               
                            <a href={el.link} target="_blank">{el.title}</a>
                          </li>
                        )
                }
              </ul>        
          <div className="Footer__copy">{copy}</div>
        </div>
       </div>
    </footer>
  )
}

export default FooterView;