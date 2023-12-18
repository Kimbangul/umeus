import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { BannerType } from "@/components/main/type";
import { CSSProperties } from "react";

const BannerView :React.FC<BannerType> = ({option, data}) => {
  const getBgStyle : (bgColor: string) => CSSProperties = (bgColor: string) => {
    return {
      backgroundColor:bgColor
    } 
  }

  return(
    <section className="Banner">
        <Swiper {...option}>
          {
            data.map((el,idx)=>
            <SwiperSlide className="Banner__slide" key={`banner-${idx}`} style={el.color ? getBgStyle(el.color) : undefined}>    
            <a href={el.href}>
             <div className="Banner__inner">
               <p className="Banner__title">{el.title}</p>
               </div>
            </a>
           </SwiperSlide> 
            )
          }       
        </Swiper>
    </section>
  )
}

export default BannerView;