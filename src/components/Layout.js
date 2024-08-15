import Footer from "./Footer";
import Navbar from "./Navbar";


export default function Layout({children}){
    return(
        <div className="bg-slate-950">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}