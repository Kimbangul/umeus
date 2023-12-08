import Slide from "@/components/main/SlideContainer";

export default function Home() {
  return (
    <>
    <Slide/>
    <section className="Main__section">
      <div className="Main__inner">
        <h2 className="Main__title">BEST ITEM</h2>
        <ul className="Main__best-list">
          <li className="Main__best-item">
            <a href="#">
              <div className="Main__best-img"></div>
              <div className="Main__best-title">곰돌찡 토끼찡 얼굴 쿠션</div>
              <div className="Main__best-price">24,000원</div>
            </a>
          </li>
        </ul>
      </div>
    </section>
    </>
  )
}
