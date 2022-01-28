import React from 'react';
import orion from "../assets/Orions_realm.png"
import glitch from "../assets/glitch.mp4"
import Slide from 'react-reveal/Slide';
import { useState } from 'react';
import deviant  from "../assets/Sequencer/deviant.mkv"

import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img5 from "../assets/5.png"
import img6 from "../assets/6.png"
import img7 from "../assets/7.png"
import { Link } from 'react-router-dom';



const Story = () => {
  const [see, setSee] = useState(false);

  return(
  <>
   <div className='w-[98.75vw] h-[100vh] mt-[5vh] pt-[90vh] md:pt-[1%] bg-black items-center flex flex-col  justify-center'>

<h1 className=" specialH2 text-5xl md:text-9xl drop-shadow-2xl mb-[8%] font-bold text-shadow-1">
Story So Far...
</h1>


<div className='md:w-[60%] ml-2 w-full flex text-white'>


<div className='p-[5%]  text-xl font-bold md:text-2xl border-solid border-[#a64af7] text-white rounded-2xl border-2'><p>Some years ago, amid our own ongoing problems, a crisis of unforeseen magnitude arrived in our world. Driven away from their home by their own magical calamity, the Elves and their peoples invaded our world instead. They seized control of a landmass and refused all the feeble attempts at diplomacy, defending to the death their new home. They were determined to control this "new world" the way they did theirs. We retaliated, of course, trying to regain the land that they stole from us. As powerful as I am, I felt I could not sit back and do nothing.</p><br/>
 

{see?<p id='see-content '>Tried to reason with both sides. Even used threats. I warned them of my premonitions. Nothing worked. Politicians and leaders on both sides were determined to use this conflict for their own agendas. War could not be prevented. A vivid dream came to me many times now, and I am convinced the threat is real. There is something worse coming, much worse. If we do not stop this pointless fighting, if we do not unite and learn to live in peace, not a single one of us will survive this threat. Humans, Elves, Trolls, Fairies, we will all be wiped out.</p>:""}{see?<span className="cursor-pointer text-[#a64af7] " onClick={()=>setSee(false)}>See less</span>:<span className="cursor-pointer text-[#a64af7]" onClick={()=>setSee(true)}>See More..</span>}</div>

</div>
<Link to="/prologue"><button  className="mt-[3vw] mr-7 ml-7 mb-7 text-white pl-5 pr-[1px] pb-6 flex items-center justify-center pt-5 h-[50px] w-[10vw]"> Read Prolouge </button></Link>
  </div>
  <div className='w-full bg-black  pt-[65vh] flex flex-col md:flex-row md:pt-10 '>
 
      <div className='md:w-[60%] w-full p-[4%] mt-11 justify-center'>
          {/* <h1 className=' text-5xl  flex flex-coltext-white drop-shadow-2xl mb-[10%] font-bold text-shadow-1'><span className='mt-[10%]'>Meet The{"     "}</span><br/><span className='text-9xl text-[#a64af7]  ml-6  specialH2 tracking-[10px]'>Deviants</span></h1> */}
          <div className='w-full mb-11 flex flex-col '>

          <h1 className='text-5xl font-bold'>Meet The</h1>
          <h1 className='text-9xl text-[#a64af7]  ml-[24%]  specialH2 tracking-[10px]'>Deviants</h1>
          </div>
          <p className='text-white text-2xl font-bold'> 
          Our mission is simple: <span className='text-[#a64af7] textShadow font-bold'>Take over the PvP and P2E gaming experience in the metaverse space.
          </span>
          <br/>
          <br/>    
          Our Deviants are cute, but vicious.<br/> These adorable  10,000 animated character NFTs would be the avatars in the metaverse with certain perks which can be customized and upgraded.
          </p>
      </div>
   
      <div className="md:w-[50%] w-full flex md:flex-row flex-col  mt-[10%]">
            <div className='w-[40%] h-[50vh] m-10 ml-1 '>
            <video
          src={deviant}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
            </div>
            
            <div className='md:w-[60%] w-full h-[50vh] m-10  flex'>
              {/* <div id="mark">
              <div class="marquee h-[50vh]">
              <ul class="marquee-content">
                <li>
                  <img
                  clasName="mr-[50px]"
                  src={img1}
                  alt=""
                  srcset=""
                  className=" rounded-3xl"
                />
                </li>
                <li>
                <img
                  clasName="mr-[50px]"
                  src={img2}
                  alt=""
                  srcset=""
                  className=" rounded-3xl"
                />
                </li>
                <li>
                <img
                  clasName="mr-[50px]"
                  src={img3}
                  alt=""
                  srcset=""
                  className=" rounded-3xl"
                />
                </li>
                <li>
                <img
                  clasName="mr-[50px]"
                  src={img6}
                  alt=""
                  srcset=""
                  className=" rounded-3xl"
                />
                </li>
                <li>

                <img
                  clasName="mr-[50px]"
                  src={img5}
                  alt=""
                  srcset=""
                  className=" rounded-3xl"
                />
                </li>
                <li>
                <img
                  clasName="mr-[50px]"
                  src={img7}
                  alt=""
                  srcset=""
                  className=" rounded-3xl"
                />
                </li>
                
              </ul>
              
            </div>
            </div> */}
            <marquee direction="up" height="450">
              <div className=' md:ml-6 ml-2 bg-white flex items-center  justify-center mt-10 rounded-3xl'><img  clasName="mr-[50px]" src={img1} alt="" srcset="" className=' rounded-3xl'/></div>
              <div className=' md:ml-6 ml-2 bg-white flex items-center   justify-center mt-10 rounded-3xl '><img src={img3} alt="" srcset="" className=' rounded-3xl'/></div>
              <div className=' md:ml-6 ml-2bg-white flex items-center   justify-center mt-10 rounded-3xl'><img src={img6} alt="" srcset="" className=' rounded-3xl'/></div>
              
            </marquee>
            <marquee direction="down" height="450">
              <div className='   flex items-center md:ml-[30px] ml-2 justify-center mt-10 rounded-3xl'><img src={img7} alt="" srcset=""  className=' rounded-3xl'/></div>
              <div className='   flex items-center md:ml-[30px] ml-2   justify-center mt-10 rounded-3xl'><img src={img2} alt="" srcset="" className=' rounded-3xl'/></div>
              <div className='   flex items-center md:ml-[30px] ml-2  justify-center mt-10 rounded-3xl'><img src={img5} alt="" srcset="" className=' rounded-3xl'/></div>
              
            </marquee>
            
            </div>
      </div>
   
  </div>
  <div className='w-full bg-black  flex  pt-[10%]'>
      <div className='w-[50%] p-[5%] flex flex-col justify-center '>
          <img src={orion} alt="" className=' boxs' />
      </div>
      <div className="w-[50%]">
      <h1 className='text-[#a64af7] tracking-[10px] text-[4rem] drop-shadow-2xl mb-[10%] pt-[5%] pl-[6%]  text-shadow-1  specialH2 font-black pr-10' >Orion's Realm Series</h1>
      <p className='text-white text-2xl pl-[5%] pr-[5%] font-bold'>
      5 large regions of land divided into 5000 Virtual Land NFTs consisting of
            cities, forests, farmlands etc.<br/> <br/> They will be used to advertise,
            develop multilevel games, construct structures, hold events and
            social gatherings and engage in commercial ventures such as arcades, metaverse sports events and competitions.
          </p>
       
      </div>
  </div>
  <div className='w-full bg-black  flex  pt-[10%]'>
      <div className='w-[50%] p-[5%] flex flex-col '>
          <h1 className='text-[#a64af7] tracking-[10px] text-7xl drop-shadow-2xl mb-[10%] font-extrabold text-shadow-1 specialH2'>Sentinel Series</h1>
          <p className='text-white text-2xl font-bold'>
              
   Limited edition of 100 Smart NFTs With AI capablities.<br/><br/> Possessing these Sentinels grants extrordinary privileges, transforming them into the "Councilor" of particular areas of the virtual territory in the Metaverse <br/><br/>
   These Smart NFTs will have the capacity to execute specific acts outside of the Metaverse, like reading  messages in a human-like voice and acting on your behalf as well as functioning as chatbots, among other AI integrated functions.     
          </p>
      </div>
      <div className="w-[50%] ">
        <div className='boxs1 w-[75%]'>

            <video src={glitch}  
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            width={700}>
            
            </video>
              </div>
          </div>


  </div>
  

 
  </>)
};

export default Story;
