import React from "react";

const Images = (props) => {
    return(
        <div>
            <img src={props.imgSrc} alt={props.title}/>
        </div>
    )
}

export default Images;