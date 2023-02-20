import Image from "next/image";
import graduate from "../public/assets/graduate.svg"
import arrow from "../public/assets/arrow-right-blue.svg"
import arrow2 from "../public/assets/arrow-right.svg"
import Wrapper from "./Wrapper";
import Link from "next/link";
import Card1 from "./Card1";

const Education = () => {
    return ( 
        <Wrapper>
            <div className="relative z-10 bg-neutral-100 md:pt-20 pt-5 md:px-10 px-5">
                <div className="grid grid-cols-4 gap-10 ">
                    <div className="flex flex-col md:flex-row md:gap-10 gap-2">
                        <Image src={graduate} width={30} alt="" /> <h2 className="md:font-semibold ">5.190 international students</h2>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-10 gap-2">
                        <Image src={graduate} width={30} alt="" /> <h2 className="md:font-semibold ">5.190 international students</h2></div>
                    <div className="flex flex-col md:flex-row md:gap-10 gap-2">
                    <Image src={graduate} width={30} alt="" /> <h2 className="md:font-semibold ">5.190 international students</h2>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-10 gap-2">
                    <Image src={graduate} width={30} alt="" /> <h2 className="md:font-semibold">5.190 international students</h2>
                    </div>
                    
                </div>
                <div className="mt-20 md:flex gap-x-10 space-y-4 md:space-y-0  md:mx-20">
                    <Card1 title={"Education"} link="Barchelor" />
                    <Card1 title={"Research"} link="Barchelor" />
                    
                </div>
            </div>
        </Wrapper>
     );
}
 
export default Education;