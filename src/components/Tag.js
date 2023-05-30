import React, { useState } from "react";
import Spinner from "./Spinner";
import useGIF from "../hooks/useGIF";



const Tag = () =>{

  
    const[tag,setTag] = useState('');
    const{gif,loading,fetchData} = useGIF(tag);

    function clickHandler(){
        fetchData(tag);
    }

    function changeHandler(event){
        setTag(event.target.value);
    }

    return(
        <div className="w-1/1 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15]">

            <h1 className=" mt-[15px] text-2xl underline uppercase font-bold">Random {tag} GIF</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450" alt="random-gif" />)
            }

            <input
                className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center "
                onChange={changeHandler}
                value={tag}
            />

            <button onClick={clickHandler}
                className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">
                Generate
            </button>

        </div>
    );
}
export default Tag