import Header2 from "@/components/header/Header2"
import Header1 from "@/components/header/Header1"
import Header3 from "@/components/header/Header3"
import Image from "next/image";
import Head from "next/head";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
        <Head>
          <title>STAY: India&apos;s Best Online Hotel Booking Site</title>
        </Head>
        <Header1/>
        <Header2/>
        <Header3/>
        <div className="w-full px-20 mt-12">
            <Image src={'/banner1.avif'} alt="banner image" width={40} height={40} className="w-full rounded-[0.3rem]" />
        </div>
        <div className="w-full px-20 mt-14">
            <Image src={'/banner2.avif'} alt="banner image" width={40} height={40} className="w-full rounded-[0.3rem]" />
        </div>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default Home
