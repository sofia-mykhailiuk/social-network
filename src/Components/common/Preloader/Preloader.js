import React from "react";
import "./Preloader.css"
import preLoader from "../../../isFetching-spinner.svg";

let Preloader = () => {
    return <div className='preloader shadowCard'>
        <div className='preloader-wrapper'>
            <img src={preLoader} alt=''/>
        </div>
    </div>
}

export default Preloader