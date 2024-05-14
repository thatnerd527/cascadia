import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import Accom from '../../assets/Accom_Icon.webp';
import Admin from '../../assets/Admin_Icon.webp';
import CC from '../../assets/CC_Icon.webp';
import Dokum from '../../assets/Dokum_Icon.webp';
import Exc from '../../assets/Exc_Icon.webp';
import Insurer from '../../assets/Insurer_Icon.webp';
import Mentor from '../../assets/Mentor_Icon.webp';
import Medpar from '../../assets/Medpar_Icon.webp';
import Research from '../../assets/Research_Icon.webp';
import Visual from '../../assets/Visual_Icon.webp';
import Website from '../../assets/Website_Icon.webp';
import Asset from '../../assets/Asset8_1.webp';
import Assets from '../../assets/Asset8_2.webp';
import Daco from '../../assets/Daco_519625.webp';
import petirkiriatas from '../../assets/petirkiriatas.webp';
import petirkananatas from '../../assets/petirkananatas.webp';
import theme from '../../assets/theme.webp';
import tagline from '../../assets/tagline.webp';
import zachery from '../../assets/zachery.webp';
import z1 from '../../assets/z1.webp';
import z2 from '../../assets/z2.webp';
import z3 from '../../assets/z3.webp';
import z4 from '../../assets/z4.webp';
import z5 from '../../assets/z5.webp';
import z6 from '../../assets/z6.webp';
import z7 from '../../assets/z7.webp';
import z8 from '../../assets/z8.webp';
import z9 from '../../assets/z9.webp';
import z10 from '../../assets/z10.webp';
import logo from '../../assets/logoabout.webp';
import data from './data.js';

function About() {
    const [showCard, setShowCard] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const cardRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                cardRef.current.classList.remove('slide-up');
                cardRef.current.classList.add('slide-down');
                setTimeout(() => {
                    setShowCard(false);
                }, 500);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='background-mentoring' ref={cardRef}>
            <div className='relative'>
                <img src={petirkiriatas} className='absolute top-0 left-0 w-[100px] h-auto' alt='Lightning Left' />
                <img src={petirkananatas} className='absolute top-0 right-0 w-[170px] h-auto z-10' alt='Lightning Right' />
                <div>
                    <h1 className='text-white text-7xl pt-[250px] font-spyagencybi'>ABOUT US</h1>
                    <p className='font-monsserat text-white text-3xl'>CHARACTER BUILDING MENTORING 2024</p>
                </div>
            </div>
            <div className='relative flex justify-between mt-[50px]'>
                <div className='flex flex-col z-20'>
                    <h2 className='font-spyagencybi text-start text-white text-6xl ml-20 mt-[170px]'>
                        REVEAL YOUR <br />CAPABILITY <br /> WITHIN A <br />PURPOSEFUL <br />QUEST
                    </h2>
                    <p className='font-monsserat text-start text-white text-xl mt-10 ml-20'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <img src={theme} className='relative z-10 mt-[50px] ml-10 mr-10 w-[700px] h-auto' alt='Theme' />
            </div>

            <div className='flex mt-[50px]'>
                <div className='flex flex-col'>
                    <img src={z1} className='relative z-10 mb-[50px]  w-[500px] mt-[-50px]' alt='z1' />
                    <img src={z2} className='relative z-5  w-[900px]   mt-[-150px] ' alt='z2' />
                </div>
                <img src={z3} className='relative z-10 ml-auto w-[500px]' alt='z3' />
            </div>

            <div className='relative'>
                <img src={tagline} className='z-10 mr-[20px] right-[700px] w-[700px] mb-[-200px] mt-[-30px] ml-10' alt='Tagline' />
                <div className='absolute top-[340px] right-[50px] -translate-y-1/2 max-w-[50%] p-[20px] box-border'>
                    <h2 className='font-spyagencybi text-end text-white text-6xl mr-10 mt-[5px]'>
                        REVEAL, <br />REFINE, <br /> RADIATE
                    </h2>
                    <p className='font-monsserat text-end text-white text-xl mr-10 ml-10 mt-10'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>
            <div className='flex mt-[50px]'>
                <div className='flex flex-col'>
                    <img src={z4} className='relative z-10 mb-[50px] w-[650px] mt-[200px]' alt='z4' />
                    <img src={z5} className='relative z-5 w-[50px] mt-[-290px]' alt='z5' />
                </div>
                <div className='flex flex-col ml-auto'>
                    <img src={z6} className='relative z-10 w-[800px] mt-[280px]' alt='z6' />
                    <img src={z7} className='relative z-5 w-[400px] mt-[-320px] ml-auto' alt='z7' />
                </div>
            </div>
            <div className='relative flex justify-between mt-[50px]'>
                <div className='flex flex-col z-20'>
                    <h2 className='font-spyagencybi text-start text-white text-6xl ml-20 mt-[-220px]'>
                        THE MEANING <br />BEHIND OUR <br /> LOGO
                    </h2>
                    <p className='font-monsserat text-start text-white text-xl mt-10 ml-20'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <img src={logo} className='relative z-10 mt-[-350px] mx-10 w-[700px] h-auto' alt='Theme' />
            </div>
            <div className='flex mt-[50px]'>
                <div className='flex flex-col'>
                    <img src={z8} className='relative z-10 mb-[0px]  w-[800px] mt-[-50px]' alt='z8' />
                    <img src={z9} className='relative z-5  w-[900px]   mt-[-150px] ' alt='z9' />
                </div>
                <img src={z10} className='relative z-5 ml-auto w-[500px]  mt-[-60px]' alt='z10' />
            </div>

            <div className='relative'>
                <img src={zachery} className='z-10 mx-10 mr-[20px] right-[700px] w-[700px] mb-[-200px] mt-[10px]' alt='Tagline' />
                <div className='absolute top-[340px] right-[50px] -translate-y-1/2 max-w-[50%] p-[20px] box-border'>
                    <h2 className='font-spyagency text-end text-white text-6xl mx-10 mt-[5px]'>
                        MEET <br />ZACHERY
                    </h2>
                    <p className='font-monsserat text-end text-white text-xl mx-10 mt-10'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>
            <div className='flex justify-between background-atas mt-[250px] '>
                <img src={Asset} className='h-[190px] pb-5' />
                <img src={Assets} className=' h-[190px] pb-5' />
            </div>
            <div className='mt-14 mb-15'>
                <h2 className='font-spyagencybi text-white text-6xl mb-[120px]'>Our Division</h2>
                <a href='#' className='underline text-white'>Click for more information</a>
            </div>
            <div className='flex items-center justify-center py-6 relative z-10'>
                <div className='bg-white cursor-pointer p-6 rounded-full inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#9CF9FF] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[0].title, description: data[0].description, image: Accom }) }}>
                    <img src={Accom} className='h-[110px]' />
                </div>
                <div className='bg-white cursor-pointer rounded-full p-6 inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#E1ED7B] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[1].title, description: data[1].description, image: Admin }) }}>
                    <img src={Admin} className='h-[110px]' />
                </div>
                <div className='bg-white cursor-pointer rounded-full p-6 inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#FFFBB9] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[2].title, description: data[2].description, image: CC }) }}>
                    <img src={CC} className='h-[110px]' />
                </div>
                <div className='bg-white cursor-pointer rounded-full p-6 inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#DCB5FF] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[3].title, description: data[3].description, image: Dokum }) }}>
                    <img src={Dokum} className='h-[110px]' />
                </div>
            </div>
            <div className='flex items-center justify-center py-6 relative z-10'>
                <div className='bg-white cursor-pointer p-6 rounded-full inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#94C3FF] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[4].title, description: data[4].description, image: Exc }) }}>
                    <img src={Exc} className='h-[110px]' />
                </div>
                <div className='bg-white cursor-pointer rounded-full p-6 inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#CCCCCC] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[5].title, description: data[5].description, image: Insurer }) }}>
                    <img src={Insurer} className='h-[110px]' />
                </div>
                <div className='bg-white cursor-pointer rounded-full p-6 inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#FFC0A5] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[6].title, description: data[6].description, image: Mentor }) }}>
                    <img src={Mentor} className='h-[110px]' />
                </div>
                <div className='bg-white cursor-pointer rounded-full p-6 inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#FFC0C0] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[7].title, description: data[7].description, image: Medpar }) }}>
                    <img src={Medpar} className='h-[110px]' />
                </div>
            </div>
            <div className='flex items-center justify-center py-6 relative z-10 mb-[-300px] z-10 pt-[-10px] '>
                <div className='bg-white cursor-pointer p-6 rounded-full inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#FFD4A9] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[8].title, description: data[8].description, image: Research }) }}>
                    <img src={Research} className='h-[110px]' />
                </div>
                <div className='bg-white cursor-pointer rounded-full p-6 inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#FFCEE5] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[9].title, description: data[9].description, image: Visual }) }}>
                    <img src={Visual} className='h-[110px]' />
                </div>
                <div className='bg-white cursor-pointer rounded-full p-6 inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#BBE0FF] hover:shadow-none DropSemua trigger' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[10].title, description: data[10].description, image: Website }) }}>
                    <img src={Website} className='h-[110px]' />
                </div>
            </div>
            <div className='Daco relative top-0 right-0 w-full overflow-hidden'>
                <img src={Daco} className='daco-image' />
            </div>
            {showCard && selectedData && (
                <div className='w-[790px] h-[480px] overflow-hidden container' ref={cardRef}>
                    <div className='bg-white cursor-pointer flex justify-center w-[120px] container top-[15%] rounded-full DropSemua' >
                        <img src={selectedData.image} className='w-[100px] object-cover' />
                    </div>
                    <div className="mt-10 mb-3 px-[40px] pb-[20px] gradientcolor container w-[750px] h-[370px] rounded-[60px] z-[-1] overflow-hidden inShadow" >
                        <h2 className='font-spyagencyOri text-white text-[30px] mt-10'>{selectedData.title}</h2>
                        <p className='text-monsserat text-white text-[25px] text-center z-10 flex flex-col justify-center items-center p-5 box-border'>{selectedData.description}</p>
                        <div className='Daco-card'>
                            <img src={Daco} className='daco-image' />
                        </div>
                        <div className='Daco-card1'>
                            <img src={Daco} className='daco-image' />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default About;