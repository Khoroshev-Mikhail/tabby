import Image from "next/image";
import bg from "../public/2.jpg"
import { useState } from "react";

export default function Helpdiv( { header, text } : { header: string, text: string } ){
    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    return(
        <div className="w-full" onClick={ () => setIsOpen( !isOpen )} >
            <div className="flex cursor-pointer">
                <div className="w-4 text-left">{ isOpen ? "-" : "+"}</div>
                { header }
            </div>
            { isOpen &&
                <p className="pl-4 pt-2 pb-2">
                    { text }
                </p>
            }
        </div>
    )
}