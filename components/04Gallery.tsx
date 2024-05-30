import Image from "next/image";

export default function Gallery(){
    return(
        <section className="_section">

            <div className="absolute left-0 top-0 w-full h-full  striped-background opacity-20">

            </div>

            <div className="_wrapper">
                <h2 className="_h2 text-white _text-outline-black">
                    Галлерея
                </h2>
                <div>
                    Здесь будет слайдер на краснобелом фоне
                </div>
            </div>
        </section>
    )
}