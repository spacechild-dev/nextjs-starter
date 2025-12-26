import { IconType } from "react-icons";

import {
  HiOutlineRocketLaunch,
  HiOutlineEnvelope,
  HiOutlineMoon,
  HiOutlineClipboard
} from "react-icons/hi2";

import {
  FaLinkedin,
  FaSpotify,
  FaLastfm
} from "react-icons/fa";

import {
  SiDiscogs
} from "react-icons/si";

export const iconLibrary: Record<string, IconType> = {
  rocket: HiOutlineRocketLaunch,
  email: HiOutlineEnvelope,
  moon: HiOutlineMoon,
  copy: HiOutlineClipboard,
  linkedin: FaLinkedin,
  spotify: FaSpotify,
  lastfm: FaLastfm,
  discogs: SiDiscogs
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
