import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { color } from "./02Order";

export default function CountOrder( { state, setState } : { state: color, setState: Dispatch<SetStateAction<any>> } ){
    return(
        <div className="w-full flex" >
            <div className="flex">
                <div className="flex flex-col justify-center">
                    <div className={`rounded-full bg-[${ state.color }] w-5 h-5`}>

                    </div>
                </div>
                <div>
                    { state.name }
                </div>
            </div>
            <div className="">
                + { state.count } -
            </div>
        </div>
    )
}