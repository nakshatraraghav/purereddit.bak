import { BsMoon, BsSun } from "react-icons/bs";

import { BsChevronDown } from "react-icons/bs";
import { FaRedditSquare } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";

import { AiOutlineStar } from "react-icons/ai"

import { BiChevronDown, BiChevronUp } from "react-icons/bi"

import { BiHome } from "react-icons/bi"

export const chevron = {
  down: BiChevronDown,
  up: BiChevronUp
};

export const themeIcons = {
  dark: BsMoon,
  light: BsSun
}

export const MenuButtonIcons = {
  chevron: BsChevronDown,
  reddit: FaRedditSquare,
  account: VscAccount
}

export const MenuItemIcons = {
  profile: CgProfile,
  logout: MdOutlineLogin,
  karma: AiOutlineStar
}
