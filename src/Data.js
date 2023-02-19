import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin ,FaBootstrap,FaPython,FaJava,FaGitAlt} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiFramer,SiTailwindcss ,SiMysql,SiFirebase,SiCplusplus,SiC,SiVite,SiMongodb} from "react-icons/si";
import {FiGithub} from "react-icons/fi"
import { BsMedium } from "react-icons/bs";
// import portfolio from "./assets/portfolio.jp";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "projects", "contact"]

export const socialIcons = [
  {
    id:1,
    icon:<FaInstagram />,
    link:"https://www.instagram.com/shreejeshballal/?igshid=ZDdkNTZiNTM%3D"
  },
  {
    id:2,
    icon:<FaLinkedin />,
    link:"https://www.linkedin.com/in/shreejesh-j-ballal/"
  },
  {
    id:3,
    icon:<BsMedium />,
    link:"https://medium.com/@shreejeshballal"
  },
  {
    id:4,
    icon:<FiGithub />,
    link:"https://github.com/shreejeshballal"
  },
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Shreejesh J Ballal"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+91 8660437070"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "shreejeshballal@gmail.com"
  }
]

export const frontend = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <FaReact />, <FaSass /> ,<SiFramer/>,<FaBootstrap/>,<SiTailwindcss/>]
export const backend = [<FaNodeJs />, <SiMysql />, <SiFirebase />, <FaPython />, <FaJava/>,<SiMongodb/>, ]
export const other = [<FaGitAlt />, <SiCplusplus />, <SiC />, <SiVite /> ]


export const workImages = [
  {
    id: 1,
    img: work1,
    name: "Aerophilia Techno Cultural Event",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "Family Expense Management System",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "Portfolio Template Design",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "Modern UI/UX Landing page ",
    category: "app"
  },
]


export const workNavs = [
  "All", "Web", "App", "Design"
]

export const finishes = [
  {
    id: 1,
    number: '0.5+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "2+",
    itemName: "Satisfied Customers"
  },
  {
    id: 3,
    number: "10+",
    itemName: "Developed Items"
  },
  {
    id: 4,
    number: "2+",
    itemName: "Clients Served"
  }]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "#1-17/388, 2nd Main Road, Landlinks Township , Derebail, Konchady, Mangalore, Karnataka"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "shreejeshballal@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91 8660437070"
  }
]
