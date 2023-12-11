export interface HeaderPropType {
  menu: MenuType[];
  isFix: boolean;
  isOpen?: boolean;
  onClickMenu?: ()=>void;
}

export interface MenuType {
  link: string,
  title: string
}