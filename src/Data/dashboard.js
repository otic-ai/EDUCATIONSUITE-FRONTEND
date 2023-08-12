import { FaGraduationCap } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { BsFileText } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";
import { IoSettings } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
export const dashboarddata = [
  {
    name: "Students",
    icon: <FaGraduationCap />,
    icon1: <BiChevronRight />,
  },
  {
    name: "Departments",
    icon: <AiFillBank />,
    icon1: <BiChevronRight />,
  },
  {
    name: "Subjects",
    icon: <FaBook />,
    icon1: <BiChevronRight />,
  },
];
export const management = [
  {
    name: "Exam List",
    icon: <BsFileText />,
    icon1: <BiChevronRight />,
  },
  {
    name: "Time Table",
    icon: <MdAccessTime />,
    icon1: <BiChevronRight />,
  },
  {
    name: "Settings",
    icon: <AiOutlineSetting />,
    icon1: <BiChevronRight />,
  },
];
export const pages = [
  {
    name: "Authentication",
    icon: <AiOutlineLock />,
    icon1: <BiChevronRight />,
  },
];
