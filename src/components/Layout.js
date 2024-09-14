import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";


export default function Layout({children}){
    return(
        <>
            <Head>
                <title>Faiz Arsyi Pragata</title>
                <meta name="description" content="Portfolio website created using Next.js and TailwindCSS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-gray-950">
                <Navbar/>
                    {children}
                <Footer/>
            </div>
        </>
    )
}