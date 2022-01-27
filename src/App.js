
import "./App.css";
import Carousal from "./components/Carousal";
import FeatureCards from "./components/FeatureCards";
import Home from "./components/Home";
import OurPartners from "./components/OurPartners";
import Roadmap from "./components/Roadmap";
import Sequncer from "./components/Sequncer";

import Story from "./components/Story";

function App() {
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
     <div className=" ">

          <div className="pokercard bg-black">
            <FeatureCards />
          </div>
     </div>
      </div>
      <div className="pt-[30%]">
        
     <Roadmap/>
      </div>
      <OurPartners/>
      
     
    </div>
  );
}

export default App;
