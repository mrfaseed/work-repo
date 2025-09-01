import Navbar from "./components/Navbar";
import Animation from "./components/Animation";
import Content from "./components/Content";
import TextPressure from "./components/TextPressure";
import Aurora from "./components/Aurora";
import MembersPage from "./components/members";
import LogoLoop from "./components/Footer";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const techLogos = [
  { node: <SiReact className="text-white" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-white" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-white" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];


// Optional image logos (if you want to use images instead of icons)
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export default function App() {
  return (
    <div className="bg-gray-900">
      {/* SECTION 1: The initial viewport with the background */}
      <section className="relative h-screen overflow-hidden">
        {/* Aurora Background: 100% width, 50% height of this section */}
        <div className="absolute top-0 left-0 w-full h-1/2 z-0">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={1}
            amplitude={1.0}
            speed={1}
          />
        </div>

        {/* Foreground Content for the first page */}
        <div className="relative z-10 flex flex-col h-full">
          <Navbar />
          {/* This div will take the remaining space and center the text */}
          <div className="flex-grow flex items-center justify-center">
            <TextPressure
              text="HYBIX"
              flex={true}
              alpha={false}
              stroke={false} 
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={30}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: The rest of your scrollable content starts here */}
      <Animation />
      <Navbar/>
      <Content />
      <MembersPage />

      {/* SECTION 3: Logo Loop */}
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
            fadeOutColor="#111827"
            ariaLabel="Technology partners"
          />
        </div>
      </section>
    </div>
  );
}
