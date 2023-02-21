import Card2 from "../UI/Card2";
import Wrapper from "../Layout/Wrapper";

const Look = () => {
    return ( 
        <Wrapper>
            <div className="md:px-32 px-5 md:py-20 py-10 bg-gray2 text-green-800">
                <h2 className="text-4xl font-light pb-10">Take a Look</h2>
                <div className="md:w-[40rem]">
                    <Card2 title="VU Campus Tour" className="md:w-72 md:h-64 h-44" />
                </div>
            </div>
        </Wrapper>
     );
}
 
export default Look;