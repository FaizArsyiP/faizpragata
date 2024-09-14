import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Analytics } from "@vercel/analytics/react"

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
                    <Analytics/>
                <Footer/>
            </div>
        </>
    )
}