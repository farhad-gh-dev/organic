export type NAVBAR_LINK = "link";
export type NAVBAR_DROPDOWN = "dropdown";

export interface _NavbarLink_ {
  type?: string;
  title: string;
  target: string;
}

export interface _NavbarDropdown_ {
  type: string;
  title: string;
  target: string[];
}

export interface _NavbarData_ {
  brandName?: string;
  brandLogo?: string;
  items?: (_NavbarLink_ | _NavbarDropdown_)[];
  signUpPage?: string;
}
