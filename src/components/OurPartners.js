import React from 'react';
import infivr from "../assets/icons/infivr.png"
import polygon from "../assets/icons/polygon.png"
import coin from '../assets/News/cointelegraph.png'
import crypto from '../assets/News/Cryptonews.png'
import newsBtc from '../assets/News/newsbtc-logo.jpg'
import YFinance from '../assets/News/Yahoo-Finance.png'
import Ynews from '../assets/News/yahoo-news-logo.png'
import {BsInstagram, BsTwitter} from "react-icons/bs"
import {AiFillRedditCircle} from "react-icons/ai"
import {AiFillMediumCircle} from "react-icons/ai"
//import { Icon } from '@iconify/react';

import {BsFacebook} from "react-icons/bs"
import {FaTelegramPlane} from "react-icons/fa"


const OurPartners = () => {
  return (<>
  
  <div className='w-full h-[100vh] bg-black   pt-[10%] justify-center items-center md:m-auto md:ml-1 ml-10'    >
      <h1 className='text-[#a64af7] text-8xl  lg:text-7xl drop-shadow-2xl mb-[10%] pr-[7%] lg:pr-[3%] font-semibold specialH2 text-shadow-1'>Our Partners</h1>
        <div className='flex justify-between'>
            <div className='w-[300px] h-[300px] lg:h-[200px] lg:w-[200px]  shadow-2xl hover:shadow-[#a64af7] duration-1000 ml-[10%] bg-white flex items-center justify-center'><img src={infivr} className='w-[250px]' alt="" /></div>
            <div className='w-[300px] h-[300px] lg:h-[200px] lg:w-[200px]  shadow-2xl ease-in-out duration-1000 hover:shadow-[#a64af7] mr-[10%] bg-white flex items-center justify-center'><img src={polygon} alt="" className='w-[250px]'/></div>
        </div>
  </div>
  <div className='md:w-full  bg-black md:ml-0 ml-11 '>

      <h1 className=' md:ml-[45%] ml-[20vw] lg:ml-[40%] md:pt-[3%] md:pb-[3%] pb-[20%] text-[#a64af7] text-5xl drop-shadow-2xl  font-semibold text-shadow-1'>Featured On</h1>
    <div className='md:flex md:flex-row flex-col lg:w-[90%] lg:ml-8 items-center md:justify-between'>
    <a className=' ease-in-out  duration-500 md:ml-12' href="https://cointelegraph.com/press-releases/swaraj-to-launch-their-metaverse-multi-utility-token-shortly"><div className='md:w-[250px] lg:w-[200px] brt duration-500 md:mt-6 mb-[5vh] h-[100px] bg-white ml-6 flex items-center justify-center rounded-2xl'><img src={coin} alt="cointelegraph" className='md:w-[90px] w-[60px]' /></div></a>
    <a className=' ease-in-out duration-500 ' href="https://finance.yahoo.com/news/swaraj-set-launch-metaverse-gaming-142500745.html"><div className='md:w-[250px] lg:w-[200px] brt duration-500 h-[100px] bg-white md:mt-6 mb-[5vh] ml-6 flex items-center justify-center rounded-2xl'><img src={YFinance} alt="cointelegraph" className='md:w-[90px] w-[60px]' /></div></a>
    <a className=' ease-in-out duration-500 ' href="https://cryptonews.com/news/swaraj-set-launch-its-metaverse-gaming-ecosystem.htm"><div className='md:w-[250px] lg:w-[200px] brt duration-500 h-[100px] bg-white md:mt-6 mb-[5vh] ml-6 flex items-center justify-center rounded-2xl'><img src={crypto} alt="cointelegraph" className='md:w-[90px] w-[60px]' /></div></a>
    <a className=' ease-in-out duration-500 ' href="https://www.newsbtc.com/press-releases/swaraj-announces-the-launch-of-a-new-metaverse-gaming-project-and-its-token/"><div className='md:w-[250px] lg:w-[200px] brt md:mt-6 mb-[5vh] duration-500 h-[100px] bg-white ml-6 flex items-center justify-center rounded-2xl'><img src={newsBtc} alt="cointelegraph" className='md:w-[90px] w-[60px]' /></div></a>
    <a className=' ease-in-out duration-500 mr-12' href="https://news.yahoo.com/swaraj-set-launch-metaverse-gaming-142500745.html"><div className='md:w-[250px] lg:w-[200px] brt duration-500 h-[100px] bg-white ml-6 md:mt-6 mb-[5vh] flex items-center justify-center rounded-2xl'><img src={Ynews} alt="cointelegraph" className='md:w-[90px] w-[60px]' /></div></a>
      

  </div>
    
   

    </div>
    
  <div className='w-full bg-black flex justify-center items-center bottom-0 md:mt-[10vw] mt-[90%]'>
  <a className='m-9 hover:text-blue-600 ease-in-out duration-500 vrt' href="https://www.facebook.com/swarajcoin"><BsFacebook fontSize={28}/></a>
  <a className='m-9 hover:text-[#9c23e8] ease-in-out duration-500 vrt' href="https://www.instagram.com/swarajcoinofficial/"><BsInstagram fontSize={28}/></a>
  <a className='m-9  hover:text-[#178bcf] ease-in-out duration-500 vrt' href="https://t.me/swarajcoin"><FaTelegramPlane fontSize={28}/></a>
  <a className='m-9 hover:text-[#0272fa] ease-in-out duration-500 vrt' href="https://twitter.com/swarajcoin"><BsTwitter fontSize={28}/></a>
  <a className='m-9 hover:text-[#fc4e03] ease-in-out duration-500 vrt' href="https://www.reddit.com/r/SwarajCoin/"><AiFillRedditCircle fontSize={28}/></a>
  <a className='m-9 hover:text-[#e5ff00] ease-in-out duration-500 vrt' href="https://swarajcoin.medium.com/"><AiFillMediumCircle fontSize={28}/></a>
  {/* <a className='m-9 hover:text-[#32cf83] ease-in-out duration-500 vrt text-4xl w-[10px]' href="https://linktr.ee/swarajcoinofficial"><Icon icon="simple-icons:linktree" /></a> */}
</div>
<div id="contactUs"className='w-[full] md:mt-0 mt-[80%] md:text-2xl text-[#9c23e8] bg-black h-[10vh] flex md:flex-row flex-col items-center justify-between pb-[2%]'><span className='ml-[10%] font-bold text-3xl'>info@swarajcoin.com</span>   <span className='md:mr-[20%] mr-[-8%]'> SWARAJ COIN ©2022 All Rights Reserved</span></div>



  </>
  );
};

export default OurPartners;
