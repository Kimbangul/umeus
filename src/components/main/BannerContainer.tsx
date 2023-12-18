'use client'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { SwiperProps } from "swiper/react";
import BannerView from "@/components/main/BannerView";


const BannerContainer = () => {

  const data = [
    {href:'#', title:'배너 타이틀이에요', color: '#5dae9c'},
    {href:'#', title:'배너 타이틀이에요', color: '#9473a6'},
    {href:'#', title:'배너 타이틀이에요', color: '#c997a1'}
  ]
  const option :  SwiperProps  = {
    className: "Banner__container",
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
  
  return <BannerView option={option} data={data}/>
}

export default BannerContainer;