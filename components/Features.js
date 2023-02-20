import Card1 from "./Card1";
import FeaturesCard from "./FeaturesCard";
import Wrapper from "./Wrapper";

const Features = () => {
  return (
    <Wrapper>
      <div className="px-32 py-20 bg-white">
        <div>
          <h2></h2>
          <div className="grid grid-cols-3 gap-10">
            <FeaturesCard title="VU main menu" link="Home" className="text-blue-500"/>
            <FeaturesCard title="Most searched" link="Home" className="text-red-800"/>
            <FeaturesCard title="Featured" link="Home" className="text-green-800"/>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Features;
