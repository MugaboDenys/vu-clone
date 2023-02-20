import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";
import arrow2 from "../public/assets/arrow-right-1.svg"

const Footer = () => {
  return (
    <Wrapper>
      <div className="px-32 py-20 bg-blue2 ">
        <div className="flex gap-3 font-semibold">
            {[
            "Privacy Statement",
            "Disclaimer",
            "Safety at VU Amsterdam",
            "Colofon",
            "Cookie Settings",
            "Web archive",
            ].map((item, index)=>{
                return(
                    <ul key={index} className="flex">
                        <Link href={'/'} className="inline text-white">{item}</Link>
                        <Image src={arrow2} alt="" width={20} />
                    </ul>
                )
            })}
        </div>
        <h3 className="pt-5 text-white"> Copyright © 2023 - Vrije Universiteit Amsterdam </h3>
      </div>
    </Wrapper>
  );
};

export default Footer;
