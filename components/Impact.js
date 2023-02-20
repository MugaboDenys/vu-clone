import Image from "next/image";
import Link from "next/link";
import img1 from "../public/assets/1.jpg";
import img2 from "../public/assets/2.jpg";
import img3 from "../public/assets/3.webp";
import img4 from "../public/assets/4.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import Wrapper from "./Wrapper";

const Impact = () => {
  const [slide, setSlide] = useState();
  return (
    <Wrapper>
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray2 shadow-xl ">
          <h2 className="text-4xl text-red-700 pt-16 md:pb-10 pb-5 md:px-28 px-5">Impact</h2>
          <Swiper
            slidesPerView={1}
            onSwiper={(sl) => setSlide(sl)}
            loop={true}
            pagination
          >
            <SwiperSlide className="md:pb-44 relative">
              <Image
                src={img1}
                className="w-full md:h-[575px] object-cover"
                alt=""
              />
              <div className="flex gap-5 md:hidden absolute right-0 bottom-[19rem] bg-orange-200 w-fit px-5 py-4">
                    <BsChevronLeft
                      className="text-black text-2xl cursor-pointer"
                      alt=""
                      onClick={() => slide.slidePrev()}
                    />
                    <BsChevronRight
                      className="text-black text-2xl cursor-pointer"
                      alt=""
                      onClick={() => slide.slideNext()}
                    />
                  </div>
              <div className="md:absolute block bottom-4 md:right-72 right-0 bg-white shadow-lg md:w-[576px] h-[306px]">
                <div className="h-5 md:border-b border-black"></div>
                <div className="px-20 relative pt-10 md:pt-0 h-full">
                  <h4 className="text-2xl text-red-700 font-light md:pt-10">
                    Science to Impact
                  </h4>
                  <p className="font-normal pt-5 text-xl">
                    An interview with entrepreneurial scientist Davide Iannuzzi,
                    Chief Impact Officer of Vrije Universiteit Amsterdam
                  </p>
                  <Link href={""} className="font-normal pt-5 block text-xl">
                    Read more
                  </Link>
                  <div className="md:flex hidden gap-5 absolute right-0 bottom-5 bg-orange-200 w-fit px-5 py-4">
                    <BsChevronLeft
                      className="text-black text-2xl cursor-pointer"
                      alt=""
                      onClick={() => slide.slidePrev()}
                    />
                    <BsChevronRight
                      className="text-black text-2xl cursor-pointer"
                      alt=""
                      onClick={() => slide.slideNext()}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
};

export default Impact;
