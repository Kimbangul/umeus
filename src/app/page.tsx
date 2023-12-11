import Slide from "@/components/main/SlideContainer";

export default function Home() {
  const bestItemData = [
    {img: '', title: '곰돌찡 토끼찡 얼굴 쿠션', bestPrice: 24000},
    {img: '', title: '곰돌찡 토끼찡 얼굴 쿠션', bestPrice: 24000},
    {img: '', title: '곰돌찡 토끼찡 얼굴 쿠션', bestPrice: 24000},
  ];
  return (
    <>
    <Slide/>
    <section className="Main__section">
      <div className="Main__inner">
        <h2 className="Main__title">BEST ITEM</h2>
        <ul className="Main__best-list">
          {
            bestItemData.map((el, idx) => 
              <li className="Main__best-item" key={`item${idx}`}>
                 <a href="#">
                  <div className="Main__best-img"></div>
                  <div className="Main__best-title">{el.title}</div>
                  <div className="Main__best-price">{el.bestPrice}원</div>
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
