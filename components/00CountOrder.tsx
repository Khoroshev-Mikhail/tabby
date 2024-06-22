import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { color } from "./02Order";

export default function CountOrder( { state, setState } : { state: color, setState: Dispatch<SetStateAction<color[]>> } ){

    const handleIncrement = () => {
        setState(prevState =>
            prevState.map(item =>
                item.name === state.name ? { ...item, count: item.count + 1 } : item
            )
        );
    };

    const handleDecrement = () => {
        setState(prevState =>
            prevState.map(item =>
                item.name === state.name ? { ...item, count: Math.max(0, item.count - 1) } : item
            )
        );
    };
    return(
        <div className="w-full flex" >
            <div className="flex gap-x-1">
                <button className="rounded-md border border-gray-200 h-8 w-8" onClick={ handleIncrement }>
                    +
                </button>
                <div className="flex flex-col justify-center mx-2">
                    { state.count }
                </div>
                <button className="rounded-md border border-gray-200 h-8 w-8" onClick={ handleDecrement }>
                    -
                </button>
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center mx-3">
                    <div className={`rounded-full w-8 h-8`} style={{backgroundColor: state.color}}>

                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    { state.name }
                </div>
            </div>
        </div>
    )
}