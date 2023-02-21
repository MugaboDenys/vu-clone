import Image from "next/image";
import Link from "next/link";
import arrow2 from "../../public/assets/arrow-right.svg"

const AmsterdamCard = (props) => {
    return ( 
        <Link href={'/'} className="block p-5 relative bg-white hover:shadow-3xl w-[22rem]">
            <Image src={props.img} className="w-[22rem] h-[25rem] object-cover" alt=""/>
            <h2 className="md:text-3xl text-2xl text-red-700">{props.words}</h2>
            <h4 className="py-5">Read more</h4>
            <Image src={arrow2} alt="" width={20} className="absolute bottom-3 right-3" />
        </Link>
     );
}
 
export default AmsterdamCard;