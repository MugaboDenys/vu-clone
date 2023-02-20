import AmsterdamCard from "./AmsterdamCard";
import Wrapper from "./Wrapper";
import img1 from "../public/assets/img1.webp"
import img2 from "../public/assets/img2.webp"
import img3 from "../public/assets/img3.webp"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Amsterdam = () => {
    return ( 
        <Wrapper>
            <div className="bg-white py-10 relative">
                <h2 className="px-32 text-4xl text-red-800 font-light">We are VU Amsterdam</h2>
                <div className="py-40 flex flex-nowrap justify-center">
                    <AmsterdamCard img={img1} />
                    <AmsterdamCard img={img2} />
                    <AmsterdamCard img={img3} />
                    <AmsterdamCard img={img3} />
                </div>
                <div className="flex py-5 px-7 bg-orange-200 absolute right-0 bottom-16">
                        <BsChevronLeft className="text-black pr-4 hover:text-white duration-300 text-4xl" alt=""/>
                        <BsChevronRight className="text-black pl-4 text-center hover:text-white duration-300 text-4xl" alt=""/>
                    </div>
            </div>
        </Wrapper>
     );
}
 
export default Amsterdam;