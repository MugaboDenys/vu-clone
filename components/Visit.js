import Link from "next/link";
import Wrapper from "./Wrapper";

const Visit = (props) => {
    return ( 
        <Wrapper>
            <div className="px-20 bg-gray2 py-20">
                <div className="bg-blue2 flex gap-8 py-16 px-20">
                    <h2 className="text-white text-3xl font-bold mr-auto">{props.left}</h2>
                    <Link href={'/'} className="py-3 px-4 bg-white block w-fit text-end font-bold text-2xl " >{props.right}</Link>
                </div>
            </div>
        </Wrapper>
     );
}
 
export default Visit;