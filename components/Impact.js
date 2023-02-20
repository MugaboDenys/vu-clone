import Image from "next/image";
import Link from "next/link";
import img1 from "../public/assets/1.jpg";
import img2 from "../public/assets/2.jpg";
import img3 from "../public/assets/3.webp";
import img4 from "../public/assets/4.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"
import { useState } from "react";

const Impact = () => {
    const [slide,setSlide] = useState();
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gray2 shadow-xl ">
        <h2 className="text-4xl text-red-700 pt-16 pb-10 px-28">Impact</h2>
        <Swiper 
            slidesPerView={1}
            onSwiper={((sl)=>setSlide(sl))}
            loop={true}
            pagination
        >
            <SwiperSlide className="pb-44 relative">
                <Image src={img1} className="w-full h-[575px] object-cover" alt="" />
                <div className="absolute bottom-4 right-72 bg-white shadow-lg w-[576px] h-[306px]">
                    <div className="h-5 border-b border-black"></div>
                    <div className="px-20 relative h-full">
                        <h4 className="text-2xl text-red-700 font-light pt-10">
                            Science to Impact
                        </h4>
                        <p className="font-normal pt-5 text-xl">
                            An interview with entrepreneurial scientist Davide Iannuzzi,
                            Chief Impact Officer of Vrije Universiteit Amsterdam
                        </p>
                        <Link href={''} className="font-normal pt-5 block text-xl">Read more</Link>
                        <div className="flex gap-5 absolute right-0 bottom-5 bg-orange-200 w-fit px-5 py-4">
                            <BsChevronLeft className="text-black text-2xl cursor-pointer" alt="" onClick={(()=>slide.slidePrev())}/>
                            <BsChevronRight className="text-black text-2xl cursor-pointer" alt="" onClick={(()=>slide.slideNext())}/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="pb-44 relative">
                <Image src={img3} className="w-full h-[575px] object-cover" alt="" />
                <div className="absolute bottom-4 right-72 bg-white shadow-lg w-[576px] h-[306px]">
                    <div className="h-5 border-b border-black"></div>
                    <div className="px-20 relative h-full">
                        <h4 className="text-2xl text-red-700 font-light pt-10">
                            Science to Impact
                        </h4>
                        <p className="font-normal pt-5 text-xl">
                            An interview with entrepreneurial scientist Davide Iannuzzi,
                            Chief Impact Officer of Vrije Universiteit Amsterdam
                        </p>
                        <Link href={''} className="font-normal pt-5 block text-xl">Read more</Link>
                        <div className="flex gap-5 absolute right-0 bottom-5 bg-orange-200 w-fit px-5 py-4">
                            <BsChevronLeft className="text-black text-2xl" alt="" onClick={(()=>slide.slidePrev())}/>
                            <BsChevronRight className="text-black text-2xl" alt="" onClick={(()=>slide.slideNext())}/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="pb-44 relative">
                <Image src={img4} className="w-full h-[575px] object-cover" alt="" />
                <div className="absolute bottom-4 right-72 bg-white shadow-lg w-[576px] h-[306px]">
                    <div className="h-5 border-b border-black"></div>
                    <div className="px-20 relative h-full">
                        <h4 className="text-2xl text-red-700 font-light pt-10">
                            Science to Impact
                        </h4>
                        <p className="font-normal pt-5 text-xl">
                            An interview with entrepreneurial scientist Davide Iannuzzi,
                            Chief Impact Officer of Vrije Universiteit Amsterdam
                        </p>
                        <Link href={''} className="font-normal pt-5 block text-xl">Read more</Link>
                        <div className="flex gap-5 absolute right-0 bottom-5 bg-orange-200 w-fit px-5 py-4">
                            <BsChevronLeft className="text-black text-2xl" alt="" onClick={(()=>slide.slidePrev())}/>
                            <BsChevronRight className="text-black text-2xl" alt="" onClick={(()=>slide.slideNext())}/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Impact;
