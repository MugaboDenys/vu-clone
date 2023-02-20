import Card2 from "./Card2";
import Wrapper from "./Wrapper";

const Cards = () => {
    return ( 
        <Wrapper >
            <div className="px-32 py-20 flex gap-10 bg-white">
                <Card2 title="Ukraine" color="text-green-900" desc = "Information and Support" />
                <Card2 title="VU & Corona" color="text-indigo-900" />
            </div>
        </Wrapper>
     );
}
 
export default Cards;