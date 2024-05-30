import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import bg from "../public/1.jpg"
export default function Header(){
    return(
        <section className="_section relative">

            <div className="absolute z-20 left-0 top-0 w-full h-full">
                <Image className="h-full w-auto object-cover" src={ bg } alt="" />
            </div>

            <div className="_wrapper">

                <h1 className="text-white text-[60px] leading-none">
                    Кресло Tabby
                </h1>
                <div>
                    Стиль, Комфорт, Практичность...
                </div>
                <div>
                    Цена, зачеркнутая, рядом нормальная и обратный отсчет!
                </div>
            </div>
        </section>
    )
}