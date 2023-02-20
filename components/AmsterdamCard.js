import Image from "next/image";
import Link from "next/link";
import arrow2 from "../public/assets/arrow-right.svg"

const AmsterdamCard = (props) => {
    return ( 
        <Link href={'/'} className="block p-5 relative bg-white hover:shadow-2xl w-[20rem]">
            <Image src={props.img} className="w-[22rem] h-[25rem] object-cover" alt=""/>
            <h2 className="text-3xl text-red-800">Vue Dream Teams</h2>
            <h4 className="py-5">Read more</h4>
            <Image src={arrow2} alt="" width={20} className="absolute bottom-3 right-3" />
        </Link>
     );
}
 
export default AmsterdamCard;