import Image from "next/image";
import Link from "next/link";
import arrowblue from "../public/assets/arrow-right-blue.svg";
import img2 from "../public/assets/2.jpg";
import Wrapper from "./Wrapper";

const Hero = () => {
  return (
    <Wrapper>
      <div className=" bg-gray-100 h-[48rem] pt-20 px-10">
        <div className="px-40">
          <h3 className="text-5xl font-light px-14">
            You don’t just become something, you become someone
          </h3>
        </div>
        <div className="flex px-32 items-center mt-20 relative z-20">
          <div className="w-1/2 bg-blue2 py-10">
            <input
              type="text"
              placeholder="Search..."
              className="mx-5 bg-blue2 w-full placeholder-blue-200 text-2xl outline-none border-b-2"
            />
          </div>
          <Link
            href={"/"}
            className="flex items-center justify-between py-10 bg-white text-blue2 w-1/2 px-5"
          >
            <h5 className="text-xl">About VU Amsterdam</h5>
            <Image alt="" src={arrowblue} width={30} />
          </Link>
        </div>
        <div className="absolute left-0 right-0 -bottom-40">
          <Image src={img2} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
