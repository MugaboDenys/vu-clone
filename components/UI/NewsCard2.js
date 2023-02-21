import Image from "next/image";
import Link from "next/link";
import arrow2 from "../../public/assets/arrow-right.svg"

const NewsCard2 = (props) => {
  return (
    <Link href={'/'} className="flex gap-5 relative">
      <div className="">
        <Image
          src={props.img}
          alt=""
          className="h-[7rem] w-[12.5rem] md:w-32 object-cover"
        />
      </div>
      <div className="">
        <h2 className="font-bold text-lg text-indigo-800">15 Feb 2023</h2>
        <h4 className="">Earthquakes Turkey and Syria</h4>
      </div>
      <Image
        src={arrow2}
        alt=""
        width={20}
        className="absolute bottom-0 right-0"
      />
    </Link>
  );
};

export default NewsCard2;
