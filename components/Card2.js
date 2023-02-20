import Image from "next/image";
import Link from "next/link";
import arrow2 from "../public/assets/arrow-right.svg"

const Card2 = (props) => {
    return ( 
        <Link href={'/'} className={`bg-white p-7 block relative shadow-2xl ${props.className ? props.className : "md:w-1/2"}`}>
            <h2 className={`text-3xl font-light ${props.color}`} >{props.title}</h2>
            <h5 className="py-5">{props.desc}</h5>
            <Image alt="" src={arrow2} width={20} className="absolute right-3 bottom-3"/>
        </Link>
     );
}
 
export default Card2;