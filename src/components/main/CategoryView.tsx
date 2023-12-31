import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { CategoryType } from "@/components/main/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryView :React.FC<CategoryType> = ({option,data, getRandomColor}) => {
  return(
    <section className="Category__list">
        <Swiper {...option}>
          {
            data.map((el,idx) => 
            <SwiperSlide className="Category__slide" key={`cate-${idx}`}> 
            <div className="Category__item" >
              <a href={el.href}>
                <div className={`Category__icon ${getRandomColor()}`}>
                  <FontAwesomeIcon icon={el.icon}/>
                </div>
                <h2>{el.title}</h2>
              </a>
            </div>
            </SwiperSlide>
            )
          }
        </Swiper>
    </section>
  )
}

export default CategoryView;