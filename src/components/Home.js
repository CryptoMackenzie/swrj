import React from "react";
import Vimeo from "@u-wave/react-vimeo";
import logo from "../assets/logo.png";
import { useWindowWidth } from "@react-hook/window-size";
import polygonLogo from "../assets/icons/polygon-badge.png";
import Typewriter from "typewriter-effect";
import vdo from "../assets/globe.mp4";
import freedompaper from "../assets/freedompaper.pdf"
import { Link } from "react-router-dom";

const Home = () => {
  const screenWidth = useWindowWidth();
  console.log(screenWidth);
  return (
    <>
      <div className="w-[100%] h-[100vh] ">
        <div class="stars "></div>
        <div class="twinkling"></div>

        <div className="h-[10%] w-full top-0 flex justify-between z-[100]">
          <div className=" p-2  md:p-[2rem] md:ml-10 sm:m-2">
            {" "}
            <img src={logo} alt="logo" className="md:w-[100px] w-[75px]" />
          </div>
          <div className="w-[50%]  flex justify-end text-white font-mono">
          <Link to="tokenomics">
            <button className="mt-5 mr-7 ml-7 hidden md:block">
              {" "}
              Tokenomics{" "}
            </button>
            </Link>
            <button
              className="mt-5 mr-7 ml-7 hidden md:block"
              onClick={() => (window.location.href = "#roadmap")}
            >
              {" "}
              RoadMap{" "}
            </button>
            <button
              className="mt-5 mr-7 ml-7 hidden md:block"
              onClick={() => (window.location.href = "#contactUs")}
            >
              {" "}
              Contact Us{" "}
            </button>
          </div>
        </div>
        <div className="w-[100vw] flex flex-col md:flex-row">
          <div className="flex  md:flex-row  flex-col w-full h-[90vh]">
            <div className="md:w-[60%] w-full pt-[10%] pl-[2%]">
              <div className="h-[20vh]">
              <h1 className=" text-white  text-4xl md:pt-0 pt-[10vw] md:text-6xl drop-shadow-2xl mb-12 font-semibold text-shadow-1">
                <Typewriter
                  options={{
                    strings: [
                      "The New Standard For Freedom And Self-Governance",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              </div>
              <span className=" pt-[200px] md:text-3xl text-xl font-bold text-[#a64af7]">
                A Truly Community Driven Metaverse Project,
                <br /> Built On The Concept Of
                <span className="text-white"> Self Governance</span>.
              </span>
              <p class="glitch">
                <span aria-hidden="true">Powered By</span>
                Powered By
                <span aria-hidden="true">Powered By</span>
              </p>

              <img src={polygonLogo} alt="Polygon" className="w-[25%] pt-6" />

              <button className=" mr-7 ml-7 mt-[8%] p-[10px]">
                {" "}
                <a href={freedompaper}>
                Freedom Paper v1.3{" "}
                </a>
              </button>
            </div>
         
        <div className="top">
          <video
            src={vdo}
            type="video/mkv"
            loop
            controls={false}
            muted
            autoPlay
            className="md:w-[50vw] w-full "
          />
        </div>
      </div>
      </div>
        </div>
      <div className="flex justify-center items-center mt-[9%]">
        <Vimeo
          showTitle={false}
          className="video mt-[-25%] mb-0 md:block hidden"
          video="669116664"
          
          width={screenWidth - 350}
          height={screenWidth - 350}
        />
      </div>
    </>
  );
};

export default Home;