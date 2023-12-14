import { SwiperProps } from "swiper/react";

export interface SlideType {
  option: SwiperProps
}

export interface CategoryType extends SlideType {
  data: CategoryDataType[]
}

export interface CategoryDataType{
  title: string,
  icon: string,
  href: string
}