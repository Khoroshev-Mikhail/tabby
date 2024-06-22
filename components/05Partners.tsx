import Image from "next/image";
import bg from "../public/2.jpg"

export default function Partners(){
    return(
        <section className="_section relative">
            <div className="_wrapper">
                <h2 className="_h2">
                    Партнерам
                </h2>
                <div className="w-full flex flex-col">
                    <h3>Кастомизация</h3>
                    <div>
                        Мы всегда рады воплотить вашу самую яркую идею.
                        Услуга Кастомизации позволяет создавать кресло любого цвета или даже принта.
                        Всегда рады  помочь с подбором материала, цветовой палитры и выслать образцы для утверждения
                        Свяжитесь с нами и мы сделаем расчет стоимости.
                    </div>
                    <h3>3D модели</h3>
                    <a className="underline" href="">
                        скачать 3D модель кресла
                    </a>
                    <h3>
                        Сотрудничество
                    </h3>
                    <div>
                        Мы сотрудничаем с дизайнерами на специальных условиях,
                        оставьте свои контакты, и мы свяжемся с вами.
                    </div>
                </div>
            </div>
        </section>
    )
}