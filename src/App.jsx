import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Options from "./components/Options";

export default function App() {
  return (
    <div className="lg:mx-[500px]">
      <Navbar />
      <Options />
      <Hero />
    </div>
  )
}