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
            <div className="relative z-10 bg-neutral-100 pt-20 px-10">
                <div className="grid grid-cols-4 gap-10 ">
                    <div className="flex gap-10">
                        <Image src={graduate} width={30} alt="" /> <h2 className="font-semibold ">5.190 international students</h2>
                    </div>
                    <div className="flex gap-10">
                        <Image src={graduate} width={30} alt="" /> <h2 className="font-semibold ">5.190 international students</h2></div>
                    <div className="flex gap-10">
                    <Image src={graduate} width={30} alt="" /> <h2 className="font-semibold ">5.190 international students</h2>
                    </div>
                    <div className="flex gap-10">
                    <Image src={graduate} width={30} alt="" /> <h2 className="font-semibold">5.190 international students</h2>
                    </div>
                </div>
                <div className="mt-20 flex gap-10 mx-20">
                    <Card1 title={"Education"} link="Barchelor" />
                    <Card1 title={"Education"} link="Barchelor" />
                    
                </div>
            </div>
        </Wrapper>
     );
}
 
export default Education;