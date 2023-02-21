import Image from "next/image";
import Link from "next/link";
import arrow2 from "../../public/assets/arrow-right.svg"

const NewsCard1 = (props) => {
  return (
    <Link href={'/'} className="flex gap-5 relative md:w-[40rem]">
      <div className="w-[27rem]">
        <Image src={props.img} alt="" className="md:h-[13rem] h-[7rem]" />
      </div>
      <div className="w-[27rem] px-3">
        <h2 className="font-bold text-lg text-indigo-800">{props.date}</h2>
        <h4 className="md:text-2xl text-lg">{props.desc}</h4>
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

export default NewsCard1;
