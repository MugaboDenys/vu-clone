import Image from "next/image";
import Link from "next/link";
import logo1 from "../../public/assets/logo1.svg";
import arrow from "../../public/assets/arrow-right.svg";
import profile from "../../public/assets/profile.svg";
import search from "../../public/assets/search.svg";
import menu from "../../public/assets/menu.svg";
import Wrapper from "./Wrapper";
import {IoCloseOutline} from "react-icons/io5"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleOpenMenu = () => setMenuIsOpen(!menuIsOpen);

  const dynamic = useRouter().asPath;
  useEffect(() => setMenuIsOpen(false), [dynamic]);

  useEffect(() => {
    document.body.style.overflow = menuIsOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [menuIsOpen]);

  return (
    <>
    <Wrapper>
      <div className="relative w-full">
      <div className="flex bg-white shadow-4xl fixed w-full max-w-6.5xl mx-auto z-30">
        <div className="px-7 mr-auto md:py-4 py-2">
          <Image src={logo1} alt="" />
        </div>
        <div className="flex items-center md:gap-5 gap-2 bg-gray2 md:px-8 px-5">
          <Link href={"/"} className="text-xl">NL</Link>
          <Image src={profile} alt="" className="w-6 cursor-pointer" />
          <Image src={search} alt="" className="w-8 cursor-pointer" />
          <Image src={menu} alt="" className="w-8 cursor-pointer" onClick={handleOpenMenu} />
        </div>
      </div>
      </div>
      {menuIsOpen ? (
        <section className="fixed inset-0 z-50 grid h-screen mx-auto bg-white max-w-6.5xl">
          <div className="overflow-y-scroll">
            <div
              onClick={handleOpenMenu}
              className="bg-[#F2EFED] ml-auto p-5 cursor-pointer absolute top-0 right-0"
            >
              <IoCloseOutline className={`text-4xl  hover:rotate-180 duration-500 ease-out`} />
            </div>
            <div className="">
              <div className="flex flex-col justify-between md:space-y-10 space-y-7 cursor-pointer md:pt-52 pt-32 md:px-36 px-10">
                {[
                  "Study at VU Amsterdam",
                  "Research",
                  "About VU Amsterdam",
                  "VU press office",
                  "Alumni",
                  "Student",
                  "Employee",
                ].map((e, i) => {
                  return (
                    <Link key={i} href={e}>
                      <div className="flex justify-between max-w-sm">
                        <p className="md:text-[24px] text-xl whitespace-nowrap font-semibold">
                          {" "}
                          {e}
                        </p>
                        {i === 0 || i === 1 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-plus"
                          >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        ) : (
                          <Image src={arrow} width={20} alt=""  />
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </Wrapper>
    
    </>
    
  );
};

export default Navbar;
