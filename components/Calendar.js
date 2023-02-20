import Link from "next/link";
import CalendarCard from "./CalendarCard";
import Wrapper from "./Wrapper";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"

const Calendar = () => {
    return ( 
        <Wrapper>
            <div className="bg-white md:px-32 px-5 py-20 ">
                <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
                <h2 className="text-4xl text-blue2 col-span-2">Calendar</h2>
                <select name="Categories" id="" className=" text-2xl px-5" >
                        <option value="">All Categories</option>
                        <option value="">Sports</option>
                        <option value="">Sports</option>
                        <option value="">Sports</option>
                        <option value="">Sports</option>
                        <option value="">Sports</option>
                    
                </select>
                <select name="Categories" id="" className=" text-2xl px-5" >
                        <option value="">Date</option>
                        <option value="">Sports</option>
                        <option value="">Sports</option>
                        <option value="">Sports</option>
                        <option value="">Sports</option>
                        <option value="">Sports</option>
                    
                </select>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-3 gap-10 pt-20 pb-10 border-b border-b-blue2">
                    <CalendarCard title="PhD Defences" date="20 February 2023" desc="PhD defence by T.J.H. Jonkers" />
                    <CalendarCard title="PhD Defences" date="20 February 2023" desc="PhD defence by T.J.H. Jonkers" />
                    <CalendarCard title="PhD Defences" date="20 February 2023" desc="PhD defence by T.J.H. Jonkers" />
                    <CalendarCard title="PhD Defences" date="20 February 2023" desc="PhD defence by T.J.H. Jonkers" />
                </div>
                <div className="flex justify-between">
                    <Link href={'/'} className="pt-4 block font-semibold text-lg" >View Calendar</Link>
                    <div className="flex py-5 px-7 bg-blue-200">
                        <BsChevronLeft className="text-black pr-4 hover:text-white duration-300 text-4xl" alt=""/>
                        <BsChevronRight className="text-black pl-4 text-center hover:text-white duration-300 text-4xl" alt=""/>
                    </div>
                </div>
            </div>
        </Wrapper>
     );
}
 
export default Calendar;