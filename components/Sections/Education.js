import Image from "next/image";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";
import { SlGraduation } from "react-icons/sl";
import { FaMedal } from "react-icons/fa";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import arrow from "../../public/assets/arrow-right-blue.svg";
import arrow2 from "../../public/assets/arrow-right.svg";
import Wrapper from "../Layout/Wrapper";
import Link from "next/link";
import Card1 from "../UI/Card1";

const Education = () => {
  return (
    <Wrapper>
      <div className="relative z-10">
        <div className=" bg-white md:h-64 md:py-8 pt-5 md:px-28 px-5">
          <div className="flex justify-between gap-5 ">
            {[
              {
                image: <SlGraduation className="text-blue2 text-4xl" />,
                title: "31.704 students",
              },
              {
                image: (
                  <HiOutlineGlobeEuropeAfrica className="text-blue2 text-4xl" />
                ),
                title: "5.190 international students",
              },
              {
                image: <FaMedal className="text-blue2 text-4xl" />,
                title: "459 PhD defences",
              },
              {
                image: (
                  <IoExtensionPuzzleOutline className="text-blue2 text-4xl" />
                ),
                title: "9 faculties",
              },
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col text-center md:text-start items-center md:items-start md:flex-row md:gap-7 gap-2"
                >
                  {item.image}{" "}
                  <h2 className="font-normal md:text-lg">{item.title}</h2>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:h-56 bg-gray2">
          <div className="md:absolute flex justify-center w-full bottom-20">
            <div className="mt-20 md:grid grid-cols-2 gap-x-10 space-y-4 md:space-y-0  md:mx-20">
              <div className="bg-white py-5 px-5 shadow-3xl">
                <div className="flex  justify-between pb-5">
                  <h2 className="text-blue2 md:text-4xl text-3xl">Education</h2>
                  <Image src={arrow} width={30} alt="" />
                </div>
                {[
                  "Bachelor's programmes",
                  "Master's programmes",
                  "Honours programme",
                  "Education for professionals",
                  "Study guide",
                ].map((item, index) => (
                  <span key={index} className="flex justify-between">
                    <Link href={"/"} className="md:text-xl text-lg font-normal leading-relaxed">
                      {item}
                    </Link>
                    <Image src={arrow2} width={20} alt="" />
                  </span>
                ))}
              </div>

              <div className=" bg-white py-5 px-5 shadow-3xl">
                <div className="flex  justify-between pb-5">
                  <h2 className="text-blue2 text-4xl">Research</h2>
                  <Image src={arrow} width={30} alt="" />
                </div>
                {[
                  "Research highlights",
                  "Valorisation",
                  "Our scientists",
                  "Prizes and distinctions",
                  "Interdisciplinary research institutes",
                ].map((item, index) => (
                  <span key={index} className="flex justify-between">
                    <Link href={"/"} className="md:text-xl text-lg font-normal leading-relaxed">
                      {item}
                    </Link>
                    <Image src={arrow2} width={20} alt="" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Education;
