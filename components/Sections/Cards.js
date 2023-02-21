import Card2 from "../UI/Card2";
import Wrapper from "../Layout/Wrapper";

const Cards = () => {
    return ( 
        <Wrapper >
            <div className="md:px-32 px-5 py-20 md:flex gap-10 space-y-5 md:space-y-0 bg-white">
                <Card2 title="Ukraine" color="text-green-900" desc = "Information and Support" />
                <Card2 title="VU & Corona" color="text-indigo-900" />
            </div>
        </Wrapper>
     );
}
 
export default Cards;