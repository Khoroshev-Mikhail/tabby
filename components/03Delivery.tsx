import Image from "next/image";
import bg from "../public/3.jpg"

export default function Delivery(){
    return(
        <section className="_section">
                        
            <div className="absolute z-20 left-0 top-0 w-full h-full">
                <Image className="h-full w-auto object-cover" src={ bg } alt="" />
            </div>

            <div className="_wrapper">
                <h2 className="_h2">
                    Доставка
                </h2>
                <ul>
                    <li>Cрок производства от 15 рабочих дней.</li>
                    <li>Изготовление предметов возможно только при 100% предоплате.</li>
                    <li>К оплате принимаются банковские карты и платежи Yandex PAY, Tinkoff PAY. Заказ можно оплатить в Сплит</li>
                    <li>Доставка оплачивается отдельно и  осуществляется СДЭК, Деловые Линии в удобное для Вас время</li>
                </ul>
                <h2></h2>
            </div>
        </section>
    )
}