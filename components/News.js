import Wrapper from "./Wrapper";
import news1 from "../public/assets/news1.png"
import news2 from "../public/assets/news2.png"
import news3 from "../public/assets/news3.jpg"
import news4 from "../public/assets/news4.jpg"
import news5 from "../public/assets/news5.png"
import arrow2 from "../public/assets/arrow-right.svg"
import Image from "next/image";
import NewsCard1 from "./NewsCard1";
import NewsCard2 from "./NewsCard2";
import Link from "next/link";

const News = () => {
    return ( 
        <Wrapper>
            <div className="bg-gray2 px-32 py-20">
                <h2 className="text-3xl font-light text-indigo-900">News</h2>
                {/* <div className="">
                    {[
                        {img : news1, desc : "Earthquakes Turkey and Syria", date : "08 Feb 2023" },
                        {img : news2, desc : "Earthquakes Turkey and Syria", date : "15 Feb 2023" },
                        {img : news3, desc : "Earthquakes Turkey and Syria", date : "08 Feb 2023" },
                        {img : news4, desc : "Earthquakes Turkey and Syria", date : "08 Feb 2023" },
                        {img : news5, desc : "Earthquakes Turkey and Syria", date : "08 Feb 2023" }
                    ].map((item, index)=>{
                        return(
                            <div key={index} className="pt-10">
                                <Image src={item.img} alt="" className="w-1/2"/>
                                <div className="w-1/2">
                                    <h2 className="font-bold text-sm text-indigo-800">{item.date}</h2>
                                    <h4 className="text-xl">{item.desc}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div> */}
                <div className="pt-10 flex gap-5">
                    <div className="space-y-10">
                        <NewsCard1 img={news1} />
                        <NewsCard1 img={news2} />
                    </div>
                    <div className="grid grid-rows-3">
                        <NewsCard2 img={news3} />
                        <NewsCard2 img={news3} />
                        <NewsCard2 img={news3} />
                    </div>
                </div>
                <div className="flex justify-center pt-20 gap-5">
                    <Link href={'/'} className="font-semibold text-xl">News overview</Link>
                    <Image alt="" src={arrow2} width={20} />
                </div>
            </div>
        </Wrapper>
     );
}
 
export default News;