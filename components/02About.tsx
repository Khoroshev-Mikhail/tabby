import Image from "next/image";
import bg from "../public/2.jpg"

export default function About(){
    return(
        <section className="_section relative">
            
            <div className="absolute z-20 left-0 top-0 w-full h-full">
                <Image className="h-full w-auto object-cover" src={ bg } alt="" />
            </div>

            <div className="_wrapper text-white ">
                <h2 className="_h2">
                    О кресле
                </h2>
                <ul className="list-disc pl-4 pt-4">
                    <li>Наше кресло не боится солнца и воды.</li>
                    <li>Кресло предназначено для отдыха на открытом воздухе в любую погоду. </li>
                    <li>Кастомизация - мы всегда готовы воплотить вашу самую яркую идею!</li>
                    <li>Для очищения поверхности от грязи будет достаточно мыльного раствора или влажной салфетки.</li>
                    <li>Ткань - Полиэстер 100%</li>
                    <li>Наполнитель - синтешар, поролоновая крошка, гранулы пенополистирола.</li>
                    <li>Размеры - </li>
                </ul>
            </div>
        </section>
    )
}