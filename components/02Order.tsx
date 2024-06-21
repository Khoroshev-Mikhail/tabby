import Image from "next/image";
import bg from "../public/2.jpg"
import { useState } from "react";
import CountOrder from "./00CountOrder";

export default function Order(){
    const [ whiteRed, setWhiteRed ] = useState<number>(0)
    const [ blue, setBlue ] = useState<number>(0)
    const [ pink, setPink ] = useState<number>(0)
    const [ yellow, setYellow ] = useState<number>(0)

    return(
        <section className="_section relative">
            <div className="_wrapper">
                <h2>
                    Сделать заказ
                </h2>
                <div>
                    <div>
                        Выберите цвет и количество
                    </div>
                    <div className="flex flex-col">
                        <CountOrder state={whiteRed} setState={setWhiteRed}/>
                    </div>
                </div>
            </div>
        </section>
    )
}