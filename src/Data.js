import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin ,FaBootstrap,FaPython,FaJava,FaGitAlt} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiFramer,SiTailwindcss ,SiMysql,SiFirebase,SiCplusplus,SiC,SiVite,SiMongodb} from "react-icons/si";
import { BsMedium } from "react-icons/bs";
// import portfolio from "./assets/portfolio.jp";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaInstagram />,
  <FaLinkedin />,
  <BsMedium />
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
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design"
  }
]


export const workNavs = [
  "All", "Web", "App", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "16 Road, TharKayTa , Yangon"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "abee02@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+959-883-271-929"
  }
]
