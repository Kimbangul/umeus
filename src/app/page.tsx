import Slide from "@/components/main/SlideContainer";

export default function Home() {
  const newItemData = [
    {img: '', title: '곰돌찡 토끼찡 얼굴 쿠션', price: 24000},
    {img: '', title: '곰돌찡 토끼찡 얼굴 쿠션', price: 24000},
    {img: '', title: '곰돌찡 토끼찡 얼굴 쿠션', price: 24000},
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
                 <a href="#">
                  <div className="Main__new-img"></div>
                  <div className="Main__new-title">{el.title}</div>
                  <div className="Main__new-price">{el.price}원</div>
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
                <li className="Main__best-item">
                  <a href="#">
                    <div className="Main__best-img"></div>
                    <div className="Main__best-rank">1</div>
                    <div className="Main__best-text">
                      <div className="Main__best-title">상품명</div>
                      <div className="Main__best-price">10000원</div>
                    </div>
                  </a>
                </li>
                <li className="Main__best-item">
                  <a href="#">
                    <div className="Main__best-img"></div>
                    <div className="Main__best-rank">2</div>
                    <div className="Main__best-text">
                      <div className="Main__best-title">상품명</div>
                      <div className="Main__best-price">10000원</div>
                    </div>
                  </a>
                </li>
            </ul>
          </div>
    </section>
    </>
  )
}
