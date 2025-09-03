import Navbar from "./components/Navbar";
import Animation from "./components/Animation";
import Content from "./components/Content";
import './App.css';
import AuroraGradientLogo from "./components/AuroraGradientLogo";
import MembersPage from "./components/members";
import LogoLoop from "./components/LogoLoop";
import Footer from './components/Footer'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const techLogos = [
  { node: <SiReact className="text-black" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-black" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-black" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-black" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Optional image logos (if you want to use images instead of icons)
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export default function App() {
  return (
    <div className="bg-white-900">
      
      <section className="relative h-screen overflow-hidden">
      

        <div className="relative z-10 flex flex-col h-full">
          <Navbar />

           <div className="flex-grow flex items-center justify-center logo-container">
               <AuroraGradientLogo 
       width="800px" 
        angle={60}
        speed={10}
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      />
           </div>
        </div>
      </section>

    
      <Animation />
      <Navbar/>
      {/* 
      <Content />
      */}
      <MembersPage />

     
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            
            ariaLabel="Technology partners"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
