'use client'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { SwiperProps } from "swiper/react";
import BannerView from "@/components/main/BannerView";


const BannerContainer = () => {

  const option :  SwiperProps  = {
    className: "Slide__container",
    modules:[Autoplay, Pagination,  EffectFade],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: false,
      disableOnInteraction: true,
    },
    speed: 1200,
    pagination: {
      clickable: true
    }
  }
  
  return <BannerView option={option}/>
}

export default BannerContainer;