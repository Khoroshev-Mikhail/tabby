import Image from "next/image";
import bg from "../public/2.jpg"
import { Dispatch, SetStateAction, useState } from "react";

export default function CountOrder( { state, setState } : { state: number | undefined, setState: Dispatch<SetStateAction<number>> } ){
    return(
        <div className="w-full flex" >
            <div className="">
                Красно-белый
            </div>
            <div className="">
                + 1 -
            </div>
        </div>
    )
}