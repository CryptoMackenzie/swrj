
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
     <div className="md:pt-[14%] mt-[-70vh] md:ml-0 ml-[2vh] md:mt-0 md:w-full w-[50%] md:block hidden">

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
