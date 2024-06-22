import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import img_1 from "../public/01Header/1.webp"
import img_2 from "../public/01Header/2.webp"
import img_3 from "../public/01Header/3.webp"
import img_4 from "../public/01Header/4.webp"
import img_5 from "../public/01Header/5.webp"
import img_6 from "../public/01Header/6.webp"
import img_7 from "../public/01Header/7.webp"
import img_8 from "../public/01Header/8.webp"
import img_9 from "../public/01Header/9.webp"
import img_10 from "../public/01Header/10.webp"
import img_11 from "../public/01Header/11.webp"
import img_12 from "../public/01Header/12.webp"
import img_13 from "../public/01Header/13.webp"
import img_14 from "../public/01Header/14.webp"
import img_15 from "../public/01Header/15.webp"

const IMAGES = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10, img_11, img_12, img_13, img_14, img_15]

export default function Header(){
    return(
        <section className="_section relative">

            <div className="_wrapper">
                <h1 className="_h2">
                    Chabby Chair
                </h1>
                <div className="w-full select-none">
                    <Swiper
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 30
                            },
                        }}
                        navigation
                        modules={[Navigation, Pagination, ]}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true
                          }}
                    >
                        {
                            IMAGES.map( (el, i) => {
                                return <SwiperSlide key={ i }>
                                    <div className="">
                                        <Image src={el} alt="Tabby chair" loading="eager" />
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div>

        </section>
    )
}