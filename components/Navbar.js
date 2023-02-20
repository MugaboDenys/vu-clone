import Image from "next/image";
import Link from "next/link";
import logo1 from "../public/assets/logo1.svg";
import profile from "../public/assets/profile.svg";
import search from "../public/assets/search.svg";
import menu from "../public/assets/menu.svg";
import Wrapper from "./Wrapper";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleOpenMenu = () => setMenuIsOpen(!menuIsOpen);
  useEffect(() => {
    document.body.style.overflow = menuIsOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [menuIsOpen]);

  return (
    <>
    <Wrapper>
      <div className="relative w-full">
      <div className="flex bg-white shadow-2xl fixed w-full max-w-6.5xl mx-auto z-30">
        <div className="px-7 mr-auto py-4">
          <Image src={logo1} alt="" />
        </div>
        <div className="flex items-center md:gap-5 gap-2 bg-gray2 md:px-8 px-5">
          <Link href={"/"}>NL</Link>
          <Image src={profile} alt="" className="w-6 cursor-pointer" />
          <Image src={search} alt="" className="w-8 cursor-pointer" />
          <Image src={menu} alt="" className="w-8 cursor-pointer" />
        </div>
      </div>
      </div>
    </Wrapper>
    {menuIsOpen ? (
        <section className="fixed inset-0 z-50 grid h-screen mx-auto bg-white max-w-7xl">
          <div className="overflow-y-scroll">
            <div
              onClick={handleOpenMenu}
              className="bg-[#F2EFED] ml-auto p-5 cursor-pointer absolute top-0 right-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=""
                width="30px"
                height="30px"
                viewBox="0 0 64 64"
                fill="none"
                stroke="#000000"
              >
                <line x1="16" y1="16" x2="48" y2="48" />
                <line x1="48" y1="16" x2="16" y2="48" />
              </svg>
            </div>
            <div className="">
              <div className="flex flex-col justify-between space-y-10 cursor-pointer pt-52 px-36">
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
                        <p className="text-[24px] leading-[30px] whitespace-nowrap font-semibold">
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
                          <svg
                            className="ml-36"
                            Name="fill-[#000000]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                            fill="#000000"
                          >
                            <path
                              d="M20 12L4 12M20 12L14 18M20 12L14 6"
                              stroke="#000000"
                              stroke-width="1.1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
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
    </>
    
  );
};

export default Navbar;
