import { IconType } from "react-icons";
import { 
    HiOutlineRocketLaunch, 
    HiOutlineDocumentText, 
    HiOutlineBriefcase, 
    HiOutlineIdentification, 
    HiOutlineSquare3Stack3D,
    HiOutlineHome,
    HiOutlineChevronDown,
    HiOutlineGlobeAlt,
    HiOutlineCube,
    HiOutlinePuzzlePiece,
    HiOutlineAcademicCap,
    HiOutlineStar,
    HiOutlineChartBar,
    HiOutlineTrophy,
    HiOutlineEnvelope,
    HiOutlineSun,
    HiOutlineMoon,
    HiOutlineLanguage,
    HiOutlineClock,
    HiOutlineCalendarDays
} from "react-icons/hi2";

export const iconLibrary: Record<string, IconType> = {
    rocket: HiOutlineRocketLaunch,
    home: HiOutlineHome,
    document: HiOutlineDocumentText,
    briefcase: HiOutlineBriefcase,
    id: HiOutlineIdentification,
    layers: HiOutlineSquare3Stack3D,
    chevronDown: HiOutlineChevronDown,
    globe: HiOutlineGlobeAlt,
    cube: HiOutlineCube,
    puzzle: HiOutlinePuzzlePiece,
    book: HiOutlineAcademicCap,
    star: HiOutlineStar,
    chart: HiOutlineChartBar,
    target: HiOutlineTrophy,
    mail: HiOutlineEnvelope,
    sun: HiOutlineSun,
    moon: HiOutlineMoon,
    language: HiOutlineLanguage,
    clock: HiOutlineClock,
    calendar: HiOutlineCalendarDays,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
