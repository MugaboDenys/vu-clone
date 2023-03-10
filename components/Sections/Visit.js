import Link from "next/link";
import Wrapper from "../Layout/Wrapper";

const Visit = (props) => {
    return ( 
        <Wrapper>
            <div className="md:px-20 px-5 bg-white md:py-20 py-10">
                <div className="bg-blue2 md:flex space-y-10 md:space-y-0 gap-8 md:py-16 py-10 md:px-20 px-5">
                    <h2 className="text-white md:text-3xl text-xl text-center font-normal mr-auto">{props.left}</h2>
                    <Link href={'/'} className="py-3 md:px-4 px-10 bg-white block w-fit md:text-end text-center md:font-bold font-medium text-2xl " >{props.right}</Link>
                </div>
            </div>
        </Wrapper>
     );
}
 
export default Visit;