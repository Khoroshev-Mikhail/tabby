import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import bg from "../public/01Header/bg.jpg"
export default function Header(){
    return(
        <section className="_section relative">

            <div className="absolute z-20 left-0 top-0 w-full h-full">
                <Image className="h-full w-auto object-cover" src={ bg } alt="" />
            </div>

            <div className="_wrapper">
                <h1>
                    Chabby Chair
                </h1>
            </div>
        </section>
    )
}