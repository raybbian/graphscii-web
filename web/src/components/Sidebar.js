import {useCallback, useState} from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import {duotoneLight} from "@uiw/codemirror-theme-duotone";
import {FaArrowRight, FaDice} from "react-icons/fa6";
import axios from "axios";
import {toast} from "react-toastify";
import {randomSmallGraphString} from "../utils/random-graph";

export default function Sidebar({setGraph}) {
    const [data, setData] = useState("0\n1\n2\n3\n4\n0 1\n0 2\n0 3\n0 4\n1 2\n1 3\n1 4\n2 3\n2 4\n3 4\n")
    const onChange = useCallback((val, viewUpdate) => {
        setData(val);
        setUnsaved(true)
    }, []);

    const [unsaved, setUnsaved] = useState(false)
    function submitData() {
        if(data.length === 0) {
            toast.error("Graph data is empty.")
            return
        }
        if(!unsaved) {
            toast.warning("Graph data has not changed!")
            return
        }
        axios.post("http://localhost:8000/get_ascii/", {"data": data}).then((res) => {
            setGraph(res.data)
            setUnsaved(false)
            toast.success("Got layout for graph!")
        }).catch((err) => {
            toast.error('An unexpected error occurred.')
        })
    }

    return (
        <div
            className={"w-full h-full flex flex-col gap-4 overflow-y-scroll p-8 bg-cream border-r-2 mobile:border-t-2 mobile:border-r-0 border-black"}>
            <div className={"flex flex-col gap-2"}>
                <p className={"text-4xl font-bold"}>Graphscii</p>
                <p className={"text-base"}>Representing graphs with Unicode and ASCII characters only!</p>
            </div>
            <div className={"flex flex-col gap-2"}>
                <div className={"flex flex-row justify-between gap-2"}>
                    <p className={"text-xl font-bold"}>Graph Data:</p>
                    <FaDice
                        size={20}
                        className={"hover:text-koi-red cursor-pointer"}
                        onClick={() => {
                            setUnsaved(true)
                            setData(randomSmallGraphString())
                        }}
                    />
                </div>
                <ReactCodeMirror className={`border-2 ${unsaved ? "border-koi-red" : "border-black"} py-0`} minHeight={"240px"} theme={duotoneLight} value={data} onChange={onChange}></ReactCodeMirror>
            </div>
            <div className={"flex flex-row justify-end"}>
                <FaArrowRight
                    className={"hover:text-koi-red cursor-pointer"}
                    size={48}
                    onClick={submitData}
                />
            </div>
        </div>
    )
}