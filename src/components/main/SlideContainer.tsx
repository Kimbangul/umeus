'use client'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { SwiperProps } from "swiper/react";
import SlideView from "@/components/main/SlideView";


const SlideContainer = () => {

  const option :  SwiperProps  = {
    className: "Slide__container",
    modules:[Autoplay, Pagination, Navigation, EffectFade],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: false,
      disableOnInteraction: true,
    },
    effect: 'fade',
      fadeEffect: {
      crossFade: true,

    },
    navigation:true,
    speed: 1200,
    pagination: {
      clickable: true
    }
  }
  
  return <SlideView option={option}/>
}

export default SlideContainer;