import Card2 from "./Card2";
import Wrapper from "./Wrapper";

const Look = () => {
    return ( 
        <Wrapper>
            <div className="md:px-32 px-5 py-20 bg-gray2 text-green-800">
                <h2 className="text-4xl font-light pb-10">Take a Look</h2>
                <div className="w-[40rem]">
                    <Card2 title="VU Campus Tour" className="w-72 h-64" />
                </div>
            </div>
        </Wrapper>
     );
}
 
export default Look;