
import "./App.css";
import Carousal from "./components/Carousal";
import FeatureCards from "./components/FeatureCards";
import Home from "./components/Home";
import OurPartners from "./components/OurPartners";
import Roadmap from "./components/Roadmap";
import Sequncer from "./components/Sequncer";
import { useWindowWidth } from "@react-hook/window-size";

import Story from "./components/Story";

function App() {
  const screenWidth = useWindowWidth();
  return (
    <div>
      {/*
     <Story/>
     <Carousal/>
     <Roadmap/>*/}
      {/* <OurPartners/>  */}
      <div className="">
      <Home/>
      <Story/>
      
      <Sequncer/>
      <Carousal/>
     <div className="pt-[14%]">

          <div className="pokercard bg-black">
            <FeatureCards />
          </div>
     </div>
      </div>
      <div className="pt-[40%]">
        
     <Roadmap/>
      </div>
      <OurPartners/>
      
     
    </div>
  );
}

export default App;
