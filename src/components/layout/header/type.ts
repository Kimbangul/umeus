export interface HeaderPropType {
  menu: MenuType[];
  isFix: boolean;
  isOpen?: boolean;
  onClickMenu?: ()=>void;
  onClickClose?: ()=>void;
}
export interface HeaderMenuPropType{
  menu: MenuType[];
}

export interface MenuType {
  link: string,
  title: string
}