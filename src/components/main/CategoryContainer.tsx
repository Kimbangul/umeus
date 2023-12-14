'use client'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { SwiperProps } from "swiper/react";
import CategoryView from "@/components/main/CategoryView";


const CategoryContainer = () => {

  const categoryData = [
    {title: '신상품', icon:'', href:'#'},
    {title: '인형/완구', icon:'', href:'#'},
    {title: '핸드폰 악세사리', icon:'', href:'#'},
    {title: '패션', icon:'', href:'#'},
    {title: '키링', icon:'', href:'#'},
    {title: '기타', icon:'', href:'#'},
  ];

  const option :  SwiperProps  = {
    className: "Category__container",
    modules:[Autoplay, Pagination, Navigation, EffectFade],
    slidesPerView: 3,
    spaceBetween: 0,
    loop: false,
    speed: 1200,
    pagination: {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },    
    breakpoints:{
      641: {
        slidesPerView: 5,          
      },
      361: {
        slidesPerView: 4,
        
      }
    }
  }
  
  return <CategoryView option={option} data={categoryData}/>
}

export default CategoryContainer;