import Navbar from "./components/Navbar";
import Animation from "./components/Animation";
import Content from "./components/Content";

export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Animation />
      <Navbar />
      <Content />
    </div>
  );
}
