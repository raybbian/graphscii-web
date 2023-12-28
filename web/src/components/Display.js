import {FaCopy, FaMinus, FaPlus} from "react-icons/fa6";
import {toast} from "react-toastify";
import {useState} from "react";

export default function Display({graph}) {
    const [fontSize, setFontSize] = useState(1)
    return (
        <div className={"h-full w-full relative"}>
            <textarea
                value={graph}
                readOnly={true}
                className={"h-full w-full font-mono leading-none border-2 border-black bg-cream text-center text-nowrap resize-none"}
                wrap={'off'}
                style={{
                    fontSize: `${fontSize}rem`
                }}
            />
            <div className={"absolute bottom-0 flex h-16 w-full items-center p-4 gap-2"}>
                <FaMinus
                    size={32}
                    className={"hover:text-koi-red cursor-pointer"}
                    onClick={() => setFontSize(fontSize - 0.1)}
                />
                <FaPlus
                    size={32}
                    className={"hover:text-koi-red cursor-pointer"}
                    onClick={() => setFontSize(fontSize + 0.1)}
                />
                <FaCopy
                    size={32}
                    className={"hover:text-koi-red cursor-pointer"}
                    onClick={() => {
                        navigator.clipboard.writeText(graph).then(() => {
                            toast.success("Copied graph!")
                        })
                    }}
                />
            </div>
        </div>
    )
}