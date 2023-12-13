import Slide from "@/components/main/SlideContainer";

export default function Home() {
  const newItemData = [
    {img: '', title: '곰돌찡 토끼찡 얼굴 쿠션', price: 24000, href:''},
    {img: '', title: '곰돌찡 토끼찡 얼굴 쿠션', price: 24000, href:''},
    {img: '', title: '곰돌찡 토끼찡 얼굴 쿠션', price: 24000, href:''},
  ];
  const bestItemData = [
    {img: '', title: '곰돌찡 토끼찡 얼굴 쿠션', price: 24000, href:''},
    {img: '', title: '곰돌찡 토끼찡 얼굴 쿠션', price: 24000, href:''},
  ];
  return (
    <>
    <Slide/>
    <section className="Main__section">
      <div className="Main__inner">
        <h2 className="Main__title">NEW ITEM</h2>
        <ul className="Main__new-list">
          {
            newItemData.map((el, idx) => 
              <li className="Main__new-item" key={`item${idx}`}>
                 <a href={el.href}>
                  <div className="Main__new-img"></div>
                  <div className="Main__new-title">{el.title}</div>
                  <div className="Main__new-price">{el.price.toLocaleString('ko-KR')}원</div>
                </a>
              </li>
              )
          }          
        </ul>
      </div>
    </section>
    <section className="Main__section">
          <div className="Main__inner">
            <h2 className="Main__title">BEST ITEM</h2>
            <ul className="Main__best-list">
              {
                   bestItemData.map((el, idx) => 
                    <li className="Main__best-item" key={`item2-${idx}`}>
                      <a href={el.href}>
                        <div className="Main__best-img"></div>
                        <div className="Main__best-rank">{idx+1}</div>
                        <div className="Main__best-text">
                          <div className="Main__best-title">{el.title}</div>
                          <div className="Main__best-price">{el.price.toLocaleString('ko-KR')}원</div>
                        </div>
                      </a>
                    </li>
                   )
              }           
            </ul>
          </div>
    </section>
    </>
  )
}
