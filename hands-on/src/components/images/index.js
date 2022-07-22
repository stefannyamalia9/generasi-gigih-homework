import React from "react";

const Images = (props) => {
    return(
        <img src={props.imgSrc} alt={props.title}/>
    )
}

export default Images;