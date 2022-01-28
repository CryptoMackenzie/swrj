import React from 'react';
import gtknImg from "../assets/Sequencer/GTKN.png";
import swrjImg from "../assets/Sequencer/Swrj.png";
import gtknVdo  from "../assets/Sequencer/gtkn.mkv";
import swrjVdo  from "../assets/Sequencer/swj.mkv";

const Sequncer = () => {
  return <>
        <div className='flex items-center justify-center   mb-[10%] '>

      
        </div>
  <div className='w-[100vw] bg-black h-[50vh] flex  justify-between'>
        <div className="relative w-full h-full justify-center flex items-center ">
        <video
          src={swrjVdo}
          type="video/mkv"
          loop
          controls={false}
          muted
          autoPlay
          className="w-[350px] pt-[28%]  mb-[3%] mr-[9%] object-cover"
        />
        <div className="absolute flex flex-col ml-11 top-0  bottom-0 ">
          <div className="login-card">
            <div className="p-5 ">
              <img src={swrjImg} alt="Logo" width="2000px" />
            </div>
            <div className="shadow-2xl">
            </div>
          </div>
        </div>
        </div>
          <div></div>
  </div>
  </>;
};

export default Sequncer;
