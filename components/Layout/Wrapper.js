import Footer from "./Footer";

const Wrapper = ({children}) => {
    return ( 
        <div className="md:max-w-6.5xl mx-auto shadow-3xl overflow-clip">
            {children}
        </div>
     );
}
 
export default Wrapper;