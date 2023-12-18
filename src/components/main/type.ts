import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { SwiperProps } from "swiper/react";

export interface SlideType {
  option: SwiperProps
}

export interface BannerDataType {
  href: string,
  title: string,
  color?: string
}
export interface BannerType extends SlideType {
  data: BannerDataType[]
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
