import Image from "next/image";
import bg from "../public/2.jpg"
import { useState } from "react";
import CountOrder from "./00CountOrder";

export type color = {
    name: string,
    color: string,
    count: number
}

const COLORS = [
    { name: 'Красно-белый', color: '#000000', count: 0 },
    { name: 'Синий', color: '#000000', count: 0 },
    { name: 'Розовый', color: '#000000', count: 0 },
    { name: 'Желтый', color: '#000000', count: 0 },
]

export default function Order(){
    const [ order, setOrder ] = useState<color[]>(COLORS);

    return(
        <section className="_section relative">
            <div className="_wrapper">
                <h2 className="_h2">
                    Сделать заказ
                </h2>
                <div>
                    <div>
                        Выберите цвет и количество
                    </div>
                    <div className="flex flex-col">
                        {
                            order.map( el => {
                                return <CountOrder state={ el } setState={ setOrder }/>
                            })
                        }
                    </div>
                    <div>
                        <button>
                            Заказать
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}