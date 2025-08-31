import Navbar from "./components/Navbar";
import Animation from "./components/Animation";
import Content from "./components/Content";
import TextPressure from './components/TextPressure';
import Aurora from "./components/Aurora";
export default function App() {
  return (
    <div className="bg-gray-900">
      
      {/* SECTION 1: The initial viewport with the background */}
      <section className="relative h-screen overflow-hidden">
        
        {/* Aurora Background: 100% width, 50% height of this section */}
        <div className="absolute top-0 left-0 w-full h-1/2 z-0">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.7}
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
      <Content />
      
      
    </div>
  );
}