import Image from "next/image";
import Link from "next/link";
import arrow2 from "../public/assets/arrow-right.svg";

const FeaturesCard = (props) => {
  return (
    <div>
    <h2 className={`${props.className} text-3xl`}>{props.title}</h2>
      <div className="bg-white py-5 px-5 shadow-2xl">
        <span className="flex justify-between">
          <Link href={"/"}>{props.link}</Link>
          <Image src={arrow2} width={20} alt="" />
        </span>

        <span className="flex justify-between">
          <Link href={"/"}>{props.link}</Link>
          <Image src={arrow2} width={20} alt="" />
        </span>
        <span className="flex justify-between">
          <Link href={"/"}>{props.link}</Link>
          <Image src={arrow2} width={20} alt="" />
        </span>
        <span className="flex justify-between">
          <Link href={"/"}>{props.link}</Link>
          <Image src={arrow2} width={20} alt="" />
        </span>
      </div>
    </div>
  );
};

export default FeaturesCard;
