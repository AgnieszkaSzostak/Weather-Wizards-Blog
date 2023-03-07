import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
    return(
        <div className="back">
            <Link to="/blog/1">back to mainpage</Link>
        </div>
    )
}

export default BackButton