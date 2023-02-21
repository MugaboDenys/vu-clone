import Image from "next/image";
import Link from "next/link";
import arrow from "../../public/assets/arrow-right-blue.svg";
import arrow2 from "../../public/assets/arrow-right.svg";

const Card1 = (props) => {
  return (
    <div className="md:w-1/2 bg-white py-5 px-5 shadow-2xl">
      <div className="flex  justify-between pb-5">
        <h2 className="text-blue2 text-4xl">{props.title}</h2>
        <Image src={arrow} width={30} alt="" />
      </div>
      <span className="flex justify-between">
        <Link href={"/"}>{props.link}</Link>
        <Image src={arrow2} width={20} alt="" />
      </span>

      <span className="flex justify-between">
        <Link href={"/"}>{props.link}</Link>
        <Image src={arrow2} width={20} alt="" />
      </span>
      <span className="flex justify-between">
        <Link href={"/"}>{`Bachelor's programmes`}</Link>
        <Image src={arrow2} width={20} alt="" />
      </span>
      <span className="flex justify-between">
        <Link href={"/"}>{`Bachelor's programmes`}</Link>
        <Image src={arrow2} width={20} alt="" />
      </span>
    </div>
  );
};

export default Card1;
