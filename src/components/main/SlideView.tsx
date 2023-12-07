import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { SlideType } from "@/components/main/type";

const SlideView :React.FC<SlideType> = ({option}) => {
  return(
    <section className="Slide">
        <Swiper {...option}>
        <SwiperSlide className="Slide__slide">    
          Slide1
        </SwiperSlide>
        <SwiperSlide className="Slide__slide">    
          Slide2
        </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default SlideView;