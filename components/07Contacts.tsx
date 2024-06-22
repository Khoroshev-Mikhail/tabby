import Image from "next/image";
import bg from "../public/2.jpg"
import Helpdiv from "./00Helpdiv";

export default function Contacts(){
    return(
        <section className="_section relative">
            <div className="_wrapper">
                <h2 className="_h2">
                    Контакты
                </h2>
                <div className="w-full flex flex-col">
                    <div>
                        Режим работы интернет-магазина пн-сб 10:00-20:00
                    </div>
                    <div>
                        <a className="_clicked_a" href="tel:+79199960129">
                            +7 (919) 996 01 29
                        </a>
                    </div>
                    <div>
                        Поддержка клиентов / Сотрудничество 
                        <a className="_clicked_a" href="mailto:chabbychair@gmail.com">
                            chabbychair@gmail.com
                        </a>
                    </div>
                    <div>
                        <a></a>
                        <a></a>
                    </div>
                </div>
            </div>
        </section>
    )
}