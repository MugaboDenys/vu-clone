import Image from "next/image";
import Link from "next/link";
import logo1 from "../public/assets/logo1.svg";
import profile from "../public/assets/profile.svg";
import search from "../public/assets/search.svg";
import menu from "../public/assets/menu.svg";
import Wrapper from "./Wrapper";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="relative w-full">
      <div className="flex bg-white shadow-2xl">
        <div className="px-10 mr-auto py-4">
          <Image src={logo1} alt="" />
        </div>
        <div className="flex items-center gap-5 bg-gray2 px-8">
          <Link href={"/"}>NL</Link>
          <Image src={profile} alt="" className="w-8 cursor-pointer" />
          <Image src={search} alt="" className="w-8 cursor-pointer" />
          <Image src={menu} alt="" className="w-8 cursor-pointer" />
        </div>
      </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
