import Image from "next/image";
import bg from "../public/2.jpg"
import Helpdiv from "./00Helpdiv";

export default function Feedback(){
    return(
        <section className="_section relative">
            <div className="_wrapper">
                <h2 className="_h2">
                    Связаться с нами
                </h2>
                <div className="w-full flex flex-col">
                    <label htmlFor="name">Имя</label>
                    <input id="name" name="name" type="text" />
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="text" />
                    <label htmlFor="name">Способ связи</label>
                    <select>
                        <option>Телеграм</option>
                        <option>Вацап</option>
                        <option>Телефонный звонок</option>
                    </select>
                    <label htmlFor="comment">Комментарий</label>
                    <input id="comment" name="comment" type="text" />
                    <button>
                        Отправить
                    </button>
                </div>
            </div>
        </section>
    )
}