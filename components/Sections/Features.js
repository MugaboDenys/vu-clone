import Image from "next/image";
import Link from "next/link";
import Card1 from "../UI/Card1";
import FeaturesCard from "../UI/FeaturesCard";
import arrow2 from "../../public/assets/arrow-right.svg"
import Wrapper from "../Layout/Wrapper";

const Features = () => {
  return (
    <Wrapper>
      <div className="md:px-32 px-5 py-20 bg-white">
        <div>
          <h2></h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
              <div className="">
                  <h2 className="text-4xl pb-4 font-light text-blue2">VU main menu</h2>
                  <div className="bg-white py-5 px-5 md:shadow-3xl">
                      {[  
                        "Home",
                        "Education",
                        "Research",
                        "About VU Amsterdam",
                        "University Library",
                        "VU Press Office",
                        "Alumni"
                      ].map((item,index)=>
                          <span key={index} className="flex justify-between">
                              <Link href={"/"} className="font-normal text-lg leading-relaxed">{item}</Link>
                              <Image src={arrow2} width={20} alt="" />
                          </span>
                      )}
                    </div>
              </div>

              <div className="">
                  <h2 className="text-4xl pb-4 font-light text-red-700">Most searched</h2>
                  <div className="bg-white py-5 px-5 md:shadow-3xl">
                      {[  
                        
                        "Contact us",
                        "People finder",
                        "Bachelor's degree programmes",
                        "Master's degree programmes",
                        "Faculties",
                        "Professionals",
                        "Working at VU Amsterdam"
                      ].map((item,index)=>
                          <span key={index} className="flex justify-between">
                              <Link href={"/"} className="font-normal text-lg leading-relaxed">{item}</Link>
                              <Image src={arrow2} width={20} alt="" />
                          </span>
                      )}
                    </div>
                </div>

                <div className="">
                  <h2 className="text-4xl pb-4 font-light text-green-700">Featured</h2>
                  <div className="bg-white py-5 px-5 md:shadow-3xl">
                      {[  
                        "Campus tour",
                        "Study guide",
                        "VU Magazine "
                      ].map((item,index)=>
                          <span key={index} className="flex justify-between">
                              <Link href={"/"} className="font-normal text-lg leading-relaxed">{item}</Link>
                              <Image src={arrow2} width={20} alt="" />
                          </span>
                      )}
                    </div>
              </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Features;
