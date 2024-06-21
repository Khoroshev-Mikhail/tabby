import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/01Header";
import Order from "@/components/02Order";
import Help from "@/components/03Help";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={`${inter.className}`}>
            {/* <Header /> */}
            <Order />
            <Help />
        </main>
    );
}
