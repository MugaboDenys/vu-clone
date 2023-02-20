import Footer from "./Footer";

const Wrapper = ({children, className}) => {
    return ( 
        <div className="md:max-w-6.5xl mx-auto">
            
            {children}
            
        </div>
     );
}
 
export default Wrapper;