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
    { name: 'Красно-белый', color: '#FF0000', count: 1 },
    { name: 'Синий', color: '#0000FF', count: 0 },
    { name: 'Розовый', color: '#00FF00', count: 0 },
    { name: 'Желтый', color: '#FFFF00', count: 0 },
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
                    <div className="flex flex-col gap-y-2">
                        {
                            order.map((el, i) => {
                                return <CountOrder state={ el } setState={ setOrder } key={ i }/>
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