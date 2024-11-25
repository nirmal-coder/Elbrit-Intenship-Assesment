import Image from "next/image";
import HeroSection from "../../components/HeroSection";

import styles from "./page.module.css";
import Features from "../../components/Features";
import Banners from "../../components/Banners";
import LatestNews from "../../components/LatestNews";
import Footer from "../../components/Footer";

export default function Page() {
  return (
    <>
      <main className={styles.mainContainer}>
        <nav>
            <Image src="/div.wraplogo.png" alt="Elbrit Logo" className="Logo" layout="responsive" width={700} height={200} priority={true}/> 
        </nav>
        <div className={styles.container}>
            <HeroSection />
            <Features />
            <Banners />
            <LatestNews />
            
        </div>

    </main>
    <Footer />
    </>
    
  );
}
