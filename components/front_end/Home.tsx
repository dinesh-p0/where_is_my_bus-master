import React from 'react'
import {Jua,Manrope,Kumbh_Sans} from "next/font/google"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import carousel_item1 from '@/public/carousel_item1.png'
import carousel_item2 from '@/public/carousel_item3.png'
import carousel_item3 from '@/public/carousel_item2.png'
import carousel_item4 from '@/public/carousel_item4.png'

import carousel_item1svg from '@/public/carousel_item1.svg'
import carousel_item2svg from '@/public/carousel_item2.svg'
import carousel_item3svg from '@/public/carousel_item3.svg' 
import carousel_item4svg from '@/public/carousel_item4.svg'

import {Carousel, CarouselContent, CarouselItem,  CarouselNext,  CarouselPrevious,} from "@/components/ui/carousel"


const jua = Jua({
  weight: "400",
  subsets: ['latin'],
});

const manrope = Manrope({
  weight: "500", 
  subsets: ['latin'],
});

const kumbh_sans_darker = Kumbh_Sans({
  weight: "700", 
  subsets: ['latin'],
});
const kumbh_sans_lighter = Kumbh_Sans({
  weight: "400", 
  subsets: ['latin'],
});


const Home = () => {
  return (
    <>
       <div className='flex flex-col justify-start items-center h-[24em] w-full bg-yellowLight px-2'>
        <span className={cn("font-semibold text-textGrey text-[1.375rem] pr-2 mt-[1.25rem]", jua.className)}>Welcome to</span>
        <div className='flex flex-col justify-center text-justify ' >
          <span className={cn("font-extrabold text-violetBlue text-4xl pr-[-0.2rem] mt-[-0.3rem]", jua.className)}>Where is my bus?</span>
        </div>

        <div className='flex flex-col items-center justify-center p-4 text-justify '>
          <p className={cn('max-w-full tracking-[-0.035em] text-justify text-[0.7rem] mt-[0.85rem] leading-snug relative',manrope.className)}>Your ultimate companion for hassle-free college commutes! Designed with students in mind, our progressive web application provides real-time tracking for college buses, ensuring you never miss a ride. Join us and experience the convenience of knowing exactly where your bus is, every step of the way!</p>
        </div>

        <Image src={logo} alt='logo' className='mr-1 size-[9.5rem]'/>
        

    </div>

    <div className= { cn('flex flex-col items-center max-w-screen-md h-[23.1rem] ')} >
      <span className={cn("text-violetBlue font-extrabold text-[2.1rem] violetBlue mt-4 ", jua.className)}>Our Features </span>

      
      <Carousel opts={{ loop:true, }}  className={cn('flex flex-row')} >
        <CarouselContent className={cn('flex flex-grow items-center')} >
          
          <CarouselItem> 
            <div className={cn('flex flex-row justify-center place-items-center  ')}>
            <Image src={carousel_item1svg} alt='student' className='w-[185px] h-[185px] mt-[1rem] mr-5 '/>
            </div> 
            
            <span className={cn("text-violetBlue tracking-tight text-[1.4rem] font-extrabold violetBlue left-14 top-3 relative ", kumbh_sans_darker.className)}>Tailored For College Life </span>

            <div className={cn('w-[92%] left-1 tracking-[-0.02em] font-medium text-justify text-[0.83rem] mt-[0.85rem] leading-tight relative',kumbh_sans_lighter.className)}>Our solution is uniquely designed for college students, providing practical and student-focused functionalities that cater to their daily needs and challenges. </div>

          </CarouselItem>

          <CarouselItem> 
            <div className={cn('flex flex-row justify-center place-items-center')}>
            <Image src={carousel_item2svg} alt='student' className='w-[183px] h-[183px] mt-[0.9rem] '/>
            </div> 
            
            <span className={cn("text-violetBlue tracking-tight text-[1.4rem] font-extrabold violetBlue left-14 top-3 relative ", kumbh_sans_darker.className)}>Tailored For College Life </span>

            <div className='w-[92%] left-1 tracking-[-0.035em]  text-justify text-[0.83rem] mt-[0.85rem] leading-tight relative'>Our GPS technology ensures precise location tracking for accurate bus location updates. Continuous tracking ensures reliable updates even in areas with network issues. </div>
          </CarouselItem>

          <CarouselItem> 
            <div className={cn('flex flex-row justify-center place-items-center')}>
            <Image src={carousel_item3svg} alt='student' className='w-[183px] h-[183px] mt-[0.8rem] '/>
            </div> 

            <span className={cn("text-violetBlue tracking-tight text-[1.4rem] font-extrabold violetBlue left-14 top-3 relative ", kumbh_sans_darker.className)}>Reliable Tracking </span>
            
            <div className='w-[92%] left-1 tracking-[-0.035em]  text-justify text-[0.83rem] mt-[0.85rem] leading-tight relative'>Our system offers real-time precision, ensuring students can efficiently plan their journeys with accurate and up-to-date bus locations, reducing waiting times.</div>
          </CarouselItem>

          <CarouselItem> 
            <div className={cn('flex flex-row justify-center place-items-center')}>
            <Image src={carousel_item4} alt='student' className='w-[290px] h-[188px] mt-[0.9rem] '/>
            </div> 

            <span className={cn("text-violetBlue tracking-tight text-[1.4rem] font-extrabold violetBlue left-14 top-3 relative ", kumbh_sans_darker.className)}>Tailored For College Life </span>
            
            <div className='w-[92%] left-1 tracking-[-0.035em]  text-justify text-[0.83rem] mt-[0.85rem] leading-tight relative'>Our encryption technology safeguards student location data, ensuring security and privacy. This ensures peace of mind for users, knowing their information is protected.  </div>
          </CarouselItem>
          
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    

    </div>
        
      
    </>
  )
}

export default Home
