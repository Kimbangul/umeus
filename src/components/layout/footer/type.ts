export interface FooterPropType {
  menu: FooterMenuType[];
  about: FooterInfoType[];
  cs: FooterInfoType[];
  bank: FooterInfoType[];
  sns: FooterMenuType[];
  copy: string
}

export interface FooterMenuType{
  title: string;
  link: string;
}

export interface FooterInfoType {
  title: string,
  desc: string
}