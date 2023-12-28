import Sidebar from "./components/Sidebar";
import {useState} from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Display from "./components/Display";

function App() {
    const [graph, setGraph] = useState("                                               \n" +
        "                                               \n" +
        "   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓   \n" +
        "   ┃                                       ┃   \n" +
        "   ┃                                       ┃   \n" +
        "   ┃      ┏━━━━━┓                          ┃   \n" +
        "   ┃      ┃     ┃                          ┃   \n" +
        "   ┃ ┏━━━━┫  2  ┣━━━━━━━━━━━━━━━━┓         ┃   \n" +
        "   ┃ ┃    ┃     ┣━━━━━━┓         ┃         ┃   \n" +
        "   ┃ ┃    ┗━━┳━━┛      ┃         ┃         ┃   \n" +
        "┏━━┻━┻┓   ┏━━┻━━┓   ┏━━┻━━┓      ┃         ┃   \n" +
        "┃     ┃   ┃     ┃   ┃     ┃      ┃         ┃   \n" +
        "┃  0  ┣━━━┫  3  ┣━━━┫  1  ┣━━━━━━╋━━━━━━━━━┛   \n" +
        "┃     ┃   ┃     ┃   ┃     ┃      ┃             \n" +
        "┗━━┳━━┛   ┗━━┳━━┛   ┗━━┳━━┛      ┃             \n" +
        "   ┃         ┃      ┏━━┻━━┓      ┃             \n" +
        "   ┃         ┗━━━━━━┫     ┃      ┃             \n" +
        "   ┗━━━━━━━━━━━━━━━━┫  4  ┣━━━━━━┛             \n" +
        "                    ┃     ┃                    \n" +
        "                    ┗━━━━━┛                    \n")


    return (
        <div className={"w-[100dvw] h-[100dvh] bg-sage-green overflow-hidden"}>
            <div className={"flex-auto flex flex-row mobile:flex-col-reverse flex-nowrap overflow-hidden w-full h-full"}>
                <div className={"w-[22rem] min-w-[22rem] mobile:w-full mobile:h-1/2 overflow-hidden flex-none"}>
                    <Sidebar setGraph={setGraph}/>
                </div>
                <div className={"flex-auto overflow-x-scroll p-8 mobile:p-4 grid display-items-stretch"}>
                    <Display graph={graph}/>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                toastStyle={{
                    border: '2px solid black',
                    borderRadius: '0px',
                    boxShadow: 'none',
                    color: "black",
                }}
            />
        </div>
    );}

export default App;
