import { Box, CssBaseline } from "@mui/material";
import Work from "./Components/work";
import ProjectCard from "./components/projectCard";
import ExpertiseCard from "./components/expertiseCard";
 
import ifincaBg from "./assets/ifinca-bg.webp";
import ifinca from "./assets/ifinca.webp";
import integraBg from "./assets/integra-bg.webp";
import friendspireBg from "./assets/friendspire-bg.webp";
import Nordicstrong from "./assets/Nordic strong.webp";
import propawn from "./assets/propawn.webp";
import silverskysoft from "./assets/silverskysoft.webp";
import nordicstronglogo from "./assets/nordic-strong-logo.webp";
import propawnlogo from "./assets/propawn-logo.webp";
import logo from "./assets/logo.png";
import tem from "./assets/tem.webp";
import collectionaries from "./assets/collectionaries.webp";
import openkey from "./assets/openkey.webp";
import hdfc from "./assets/hdfc.webp";
import kfc from "./assets/kfc.webp";
import temlogo from "./assets/tem-logo.webp";
import hdfclogo from "./assets/hdfc-logo.png";
import collectionlogo from "./assets/collection-logo.webp";
import kfclogo from "./assets/kfc-logo.png";
import openkeylogo from "./assets/openkey-logo.webp";
export default function App() {
  const projects = [
    {
      projectTitle: "iFinca",
      bgImage: ifincaBg,
      overlayImage: ifinca,
      bgColor: "#317062",
      subtitle: "A blockchain based solution to streamline the coffee supply chain",
      description:
        "An innovative solution that optimizes and simplifies the coffee supply chain, ensuring transparency, efficiency, and sustainability from farm to cup.",
      points: [
        "Received seed funding of $2 million",
        "Recognized by Coffee Association Boston USA and Start-up Columbia",
        "Over 10,000 stakeholders currently using the platform",
      ],
      tags: ["Supply chain", "Hyperledger Fabric", "Blockchain"],
    },
    {
      projectTitle: "Integra Ledger",
      bgImage: integraBg,
      overlayImage: ifinca,
      bgColor: "#152c7c",
      subtitle: "A Blockchain-based Digital Signature Platform",
      description:
        "A comprehensive blockchain-based solution for secure and efficient data sharing that ensures tamper-proof records, enabling seamless collaboration and transparency among legal professionals.",
      points: [
        "Secured $3 million funding from the Capital Group",
        "Used by over 300 law firms across the globe",
        "Used by big enterprises like Seven Eleven, Mohawk oil, Hogan Lovell, etc.",
      ],
      tags: ["Legal consortium", "Hyperledger Blockchain", "Web platform"],
    },
    {
      projectTitle: "Friendspire",
      bgImage: friendspireBg,
      overlayImage: ifinca,
      bgColor: "#653fee",
      subtitle: "A Personalized Entertainment Recommendation Solution",
      description:
        "A dynamic solution to enhance the way people discover and share recommendations with friends which empowers them to curate personalized lists of their favorite books, movies, TV shows, podcasts, and more.",
      points: [
        "Secured seed funding of $300k",
        "Got 10,000 registrations post-launch",
        "Featured in CBS19, CNN & EU-Startups",
      ],
      tags: ["Social networking", "iPhone", "Android"],
    },
    {
      projectTitle: "Unique School",
      bgImage: friendspireBg,
      overlayImage: ifinca,
      bgColor: "#173f58",
      subtitle: "A Smart School Management Platform",
      description:
        "A smart school management platform that streamlines administrative tasks, enhances communication, collaboration, and addresses security concerns.",
        points:[
          "Used by over 140 renowned schools across the UK and Ireland",
        "More than 100,000 users currently using this platform",
        "Funded by some of the world's leading venture investors",
      ],
      tags: ["Education", "Web platform", "Mobile apps"],
    },
    
  ];
 
 
  const expertiseItems = [
    {
      title: "Nordic Strong",
      subtitle: "BOUTIQUE FITNESS APP.",
      paragraph:"With a range of training programs, equipment, and resources, Nordic Strong fosters a supportive community, empowering users to achieve their fitness goals.",
      bgImage:Nordicstrong,
      logo:nordicstronglogo,
    },
    {
      title: "Propawn",
      subtitle: "DIGITAL PAWNSHOP.",
      paragraph:"With the aim of delivering a convenient pawnshop experience, Propawn allows customers to explore and buy a wide range of items while accessing collateral-based loans.",
      bgImage:propawn,
      logo:propawnlogo,
    },
    {
      title: "Sky Salon Scheduler",
      subtitle: "APPOINTMENT BOOKING FOR SALONS",
      paragraph:"With its user-friendly interface and efficient scheduling tools, it optimizes operations for salon owners while providing a seamless and personalized booking experience for clients.",
      bgImage:silverskysoft,
      logo:logo,

    },
    {
      title: "TEM",
      subtitle: "HEALTH IMPROVEMENT APP",
      paragraph:"TEM provides personalized tools and resources for tracking fitness activities, monitoring nutrition, managing stress, and fostering healthy habits.",
      bgImage:tem,
      logo:temlogo,
    },
    {
      title: "Collectionaire",
      subtitle: "MEMORIES COLLECTION PLATFORM",
      paragraph:"Collectionaire is an online platform that simplifies and organizes personal collections. It allows users to digitally catalog and preserve valuable items, memories, and documents",
      bgImage:collectionaries,
      logo:collectionlogo,
    },
     {
      title: "OpenKey",
      subtitle: "DIGITAL KEY SOLUTION FOR HOTELS",
      paragraph:"OpenKey is a hotel access management solution. It enables hotels to provide digital keys to guests through their smartphones, enhancing convenience and security.",
      bgImage:openkey,
      logo:openkeylogo,
    },
    {
      title: "HDFC Life Insta Sales",
      subtitle: "DIGITAL INSURANCE APP",
      paragraph:"The HDFC Life Insta simplifies the insurance sales process, providing a seamless digital platform to showcase products, calculate premiums, and facilitate customer interactions.",
      bgImage:hdfc,
      logo:hdfclogo,
    },
    {
      title: "KFC Delivery Store Applications",
      subtitle: "FOOD RESTAURANT.",
      paragraph:"The KFC delivery store app enhances operational efficiency and streamlines order management, ensuring smooth operations and customer satisfaction for the KFC business.",
      bgImage:kfc,
      logo:kfclogo,
    },
   
   
   
  ];
 
  return (
    <><CssBaseline/>
    <Box>
      <Work />
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          direction={index % 2 === 0 ? "image-left" : "image-right"}
        />
      ))}
     
      <ExpertiseCard  items={expertiseItems}/>
    </Box>
    </>
  );
}
 
 
  
    