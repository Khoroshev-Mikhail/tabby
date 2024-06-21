import Image from "next/image";
import bg from "../public/2.jpg"
import Helpdiv from "./00Helpdiv";

const data: { header: string, text: string}[] = [
    { header: "Доставка и оплата", text: "Изготовление предметов возможно только при 50% предоплате. К оплате принимаются банковские карты  и платежи Yandex PAY, Tinkoff PAY. Заказ можно оплатить в Сплит  Доставка оплачивается отдельно и  осуществляется СДЭК, Деловые Линии в удобное для Вас время. Доставка по Санкт-Петербургу осуществляется БЕСПЛАТНО *Если Вам удобнее получить товар другой транспортной компанией"},
    { header: "Гарантия и возврат", text: "Текст"},
    { header: "Хочу свой цвет и размер", text: "Текст"},
    { header: "Дизайнерам", text: "Текст"},
    { header: "Уход за креслом", text: "Текст"},
]

export default function Help(){
    return(
        <section className="_section relative">
            <div className="_wrapper">
                <h2>
                    Помощь
                </h2>
                <div className="w-full flex flex-col">
                    {data.map(el => {
                        return <Helpdiv {...el} />
                    })}
                </div>
            </div>
        </section>
    )
}