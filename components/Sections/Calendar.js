import Link from "next/link";
import CalendarCard from "../UI/CalendarCard";
import Wrapper from "../Layout/Wrapper";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { useState } from "react";

const Calendar = () => {
  const [slide, setSlide] = useState();
  return (
    <Wrapper>
      <div className="bg-white md:px-32 px-5 md:py-20 py-7 ">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
          <h2 className="text-3xl text-blue2 col-span-2">Calendar</h2>
          <div className="shadow-3xl">
            <select
              name="Categories"
              id=""
              className=" md:text-2xl text-lg px-5 w-full bg-white py-4"
            >
              <option value="">All Categories</option>
              <option value="">Sports</option>
              <option value="">Sports</option>
              <option value="">Sports</option>
              <option value="">Sports</option>
              <option value="">Sports</option>
            </select>
          </div>
          <div className="shadow-3xl">
            <select
              name="Categories"
              id=""
              className=" md:text-2xl text-lg px-5 w-full bg-white py-4"
            >
              <option value="">Date</option>
              <option value="">Sports</option>
              <option value="">Sports</option>
              <option value="">Sports</option>
              <option value="">Sports</option>
              <option value="">Sports</option>
            </select>
          </div>
        </div>
        <div className="flex flex-nowrap overflow-x-auto scroll md:gap-10 gap-3 pt-20 pb-10 border-b border-b-blue2">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            onSwiper={(slide) => setSlide(slide)}
            loop={true}
          >
            {[
              {
                title: "PhD Defences",
                date: "20 February 2023",
                desc: "PhD defence by T.J.H. Jonkers",
              },
              {
                title: "Lectures",
                date: "21 February 2023",
                desc: "ABRI lunch seminar Dr. Paula Jarzabkowski",
              },

              {
                title: "Other Events",
                date: "20 February 2023",
                desc: "ABRI lunch seminar Dr. Paula Jarzabkowski",
              },
              {
                title: "PhD Defences",
                date: "20 February 2023",
                desc: "PhD defence by T.J.H. Jonkers",
              },
              {
                title: "Other Events",
                date: "20 February 2023",
                desc: "ABRI lunch seminar Dr. Paula Jarzabkowski",
              },
              {
                title: "Lectures",
                date: "21 February 2023",
                desc: "ABRI lunch seminar Dr. Paula Jarzabkowski",
              },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <CalendarCard
                  title={item.title}
                  date={item.date}
                  desc={item.desc}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex md:justify-between justify-center">
          <Link href={"/"} className="pt-4 block font-semibold text-lg ">
            View Calendar
          </Link>
          <div className="hidden md:flex py-5 px-7 bg-blue-200">
            <BsChevronLeft
              className="text-black pr-4 hover:text-white duration-300 text-4xl"
              alt=""
              onClick={() => slide.slidePrev()}
            />
            <BsChevronRight
              className="text-black pl-4 text-center hover:text-white duration-300 text-4xl"
              alt=""
              onClick={() => slide.slideNext()}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Calendar;
