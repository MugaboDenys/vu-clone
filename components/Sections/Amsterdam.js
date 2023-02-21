import AmsterdamCard from "../UI/AmsterdamCard";
import Wrapper from "../Layout/Wrapper";
import img1 from "../../public/assets/img1.webp"
import img2 from "../../public/assets/img2.webp"
import img3 from "../../public/assets/img3.webp"
import img4 from "../../public/assets/img4.webp"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from "react";

const Amsterdam = () => {
    const [slide, setSlide] = useState();
    return ( 
        <Wrapper>
            <div className="bg-white py-10 relative overflow-hidden">
                <h2 className="md:px-32 px-5 md:text-4xl text-3xl text-red-700 font-light">We are VU Amsterdam</h2>
                <div className="md:py-40 py-5 inline-flex w-[90rem]">
                <Swiper
                spaceBetween={10}
                slidesPerView={4}
                onSwiper={((slide)=>setSlide(slide))}
                loop ={true} 
                
                >
                           
                        <SwiperSlide>
                            <AmsterdamCard  img={img1} words = "Vrije Schrijver (Writer in Residence)" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AmsterdamCard img={img2} words = "VU Dream Teams" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AmsterdamCard  img={img3} words = "Frank van Harmelen" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AmsterdamCard  img={img4} words = "Gravitation Grant recipient Frank van Harmelen" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AmsterdamCard  img={img3} words = "Gravitation Grant recipient Frank van Harmelen" />
                        </SwiperSlide>
                        
                </Swiper>
                </div>
                <div className="hidden md:flex py-5 px-7 bg-orange-200 absolute right-0 bottom-4">
                        <BsChevronLeft className="text-black pr-4 cursor-pointer hover:text-white duration-300 text-4xl" alt="" onClick={(()=>slide.slidePrev())}/>
                        <BsChevronRight className="text-black pl-4 cursor-pointer text-center hover:text-white duration-300 text-4xl" alt="" onClick={(()=>slide.slideNext())}/>
                    </div>
            </div>
        </Wrapper>
     );
}
 
export default Amsterdam;