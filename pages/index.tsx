import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/01Header";
import Order from "@/components/02Order";
import Help from "@/components/06Help";
import Contacts from "@/components/07Contacts";
import Feedback from "@/components/08Feedback";
import About from "@/components/04About";
import Partners from "@/components/05Partners";
import AboutTabby from "@/components/03AboutTabby";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={`${inter.className}`}>
            <Header />
            <Order />
            <AboutTabby />
            <About />
            <Partners />
            <Help />
            <Contacts />
            <Feedback />
        </main>
    );
}
