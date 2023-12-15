'use client'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { SwiperProps } from "swiper/react";
import CategoryView from "@/components/main/CategoryView";
import { faGift, faKey, faMobileScreenButton, faRobot, faShapes, faShirt } from '@fortawesome/free-solid-svg-icons';


const CategoryContainer = () => {
  // const colorData = [
  //   'beige-1','beige-2', 'yellow-1','yellow-2','brown-1',
  //   'brown-2','blue-1','blue-2','blue-3','blue-4','green-1',
  //   'green-2','green-3','purple-1','purple-2','purple-3','purple-4',
  //   'red-1','red-2','red-3'
  // ];
  let colorData = [
    'beige-1', 'yellow-1','brown-1', 'blue-1','green-1','purple-1', 'red-1'];

  // FUNCTION 색상 데이터 랜덤 생성
  const getRandomColor = () => {
    const random =  Math.floor(Math.random() * colorData.length);
    console.log(colorData[random]);
    const pick = colorData[random];
    colorData = colorData.filter(el => el!==pick);
    console.log(colorData);
    return  pick;
  }

  const categoryData = [
    {title: '신상품', icon:faGift, href:'#'},
    {title: '인형/완구', icon:faRobot, href:'#'},
    {title: '핸드폰 악세사리', icon:faMobileScreenButton, href:'#'},
    {title: '패션', icon:faShirt, href:'#'},
    {title: '키링', icon:faKey, href:'#'},
    {title: '기타', icon:faShapes, href:'#'},
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
  
  return <CategoryView option={option} data={categoryData} getRandomColor={getRandomColor}/>
}

export default CategoryContainer;