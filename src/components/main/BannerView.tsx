import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { BannerType } from "@/components/main/type";

const BannerView :React.FC<BannerType> = ({option}) => {
  return(
    <section className="Banner">
        <Swiper {...option}>
        <SwiperSlide className="Banner__slide">    
          Slide1
        </SwiperSlide>
        <SwiperSlide className="Banner__slide">    
          Slide2
        </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default BannerView;