

import Spinner from "./Spinner";
import useGIF from "../hooks/useGIF";



const Random = () =>{

    const{gif,loading,fetchData} = useGIF(); //custom hook

    function clickHandler(){
        fetchData();
    }

    return(
        <div className="w-1/1 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15]">

            <h1 className=" mt-[15px] text-2xl underline uppercase font-bold">A random gif</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450" alt="random-gif" />)
            }

            

            <button onClick={clickHandler}
                className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">
                Generate
            </button>

        </div>
    );
}
export default Random