import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { SwiperProps } from "swiper/react";

export interface SlideType {
  option: SwiperProps
}

export interface CategoryType extends SlideType {
  data: CategoryDataType[],
  getRandomColor: ()=>string
}

export interface CategoryDataType{
  title: string,
  icon: IconDefinition,
  href: string
}