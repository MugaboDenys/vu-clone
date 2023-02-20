import Image from "next/image";
import Link from "next/link";
import arrow2 from "../public/assets/arrow-right.svg"

const NewsCard1 = (props) => {
  return (
    <Link href={'/'} className="flex gap-5 relative w-[40rem]">
      <div className="w-[27rem]">
        <Image src={props.img} alt="" className="h-[13rem]" />
      </div>
      <div className="w-[27rem] px-3">
        <h2 className="font-bold text-sm text-indigo-800">15 Feb 2023</h2>
        <h4 className="text-2xl">Earthquakes Turkey and Syria</h4>
      </div>
      <Image
        src={arrow2}
        alt=""
        width={20}
        className="absolute bottom-3 right-3"
      />
    </Link>
  );
};

export default NewsCard1;
