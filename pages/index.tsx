import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/01Header";
import About from "@/components/02About";
import Delivery from "@/components/03Delivery";
import Gallery from "@/components/04Gallery";
import Footer from "@/components/05Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={`${inter.className}`}>
            <Header />
            <About />
            <Delivery />
            <Gallery />
            <Footer />
        </main>
    );
}
