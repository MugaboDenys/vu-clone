import Image from "next/image";
import Link from "next/link";
import arrowblue from "../../public/assets/arrow-right-blue.svg";
import img2 from "../../public/assets/2.jpg";
import search2 from "../../public/assets/search2.svg";
import Wrapper from "../Layout/Wrapper";

const Hero = () => {
  return (
    <Wrapper>
      <div className=" bg-gray-100 md:h-[48rem] md:pt-32 pt-24 md:px-10">
        <div className="md:px-40">
          <h3 className="md:text-5xl text-4xl font-light md:px-14 px-5">
            You don{"'"}t just become something, you become someone
          </h3>
        </div>
        <div className="md:flex md:px-32 items-center md:mt-20 mt-8 relative z-20">
          <div className="md:w-1/2 bg-blue2 md:py-8  py-5  flex">
            <form action="" className="bg-blue2 flex h-8 pb-2 mx-5 w-full border-b-2">
              <input
                type="text"
                placeholder="Search..."
                className=" bg-transparent w-full placeholder-blue-200 md:text-xl text-lg outline-none "
              />
              <Image src={search2} alt="" width={20} className="ml-20"/>
            </form>
          </div>
          <Link
            href={"/"}
            className="flex items-center justify-between md:py-8 py-5 bg-white text-blue2 md:w-1/2 px-5"
          >
            <h5 className="text-xl">About VU Amsterdam</h5>
            <Image alt="" src={arrowblue} width={30} />
          </Link>
        </div>
        <div className="md:absolute  left-0 right-0 -bottom-32">
          <Image src={img2} alt="" className="h-44 md:h-auto object-cover mx-auto" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
