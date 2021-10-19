import React from "react";
import preLoader from "../../../isFetching-spinner.svg";

let Preloader = () => {
    return <div>
        <img src={preLoader} alt=''/>
    </div>
}

export default Preloader