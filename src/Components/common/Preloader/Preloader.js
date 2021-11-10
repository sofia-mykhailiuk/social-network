import React from "react";
import "./Preloader.css"
import preLoader from "../../../isFetching-spinner.svg";

let Preloader = () => {
    return <div className='app-wrapper-content panelWrapper preloader'>
        <div className='preloader-wrapper'>
            <img src={preLoader} alt=''/>
        </div>
    </div>
}

export default Preloader