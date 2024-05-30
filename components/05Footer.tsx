import Image from "next/image";
import bg from "../public/4.jpg"

export default function Footer(){
    return(
        <section className="_section">
                       
            <div className="absolute z-20 left-0 top-0 w-full h-full">
                <Image className="h-full w-auto object-cover" src={ bg } alt="" />
            </div>

            <div className="_wrapper">
                <h2>Закажи прямо сейчас</h2>
                <div>
                    Здесь таже самая скидка с таймером обратного отсчета и контакты
                </div>
                <div>
                    Прыгающая иконка whatsup и палец жми!
                </div>
            </div>
        </section>
    )
}