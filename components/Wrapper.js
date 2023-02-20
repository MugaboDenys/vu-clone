import Footer from "./Footer";

const Wrapper = ({children, className}) => {
    return ( 
        <div className="max-w-7xl mx-auto">
            
            {children}
            
        </div>
     );
}
 
export default Wrapper;