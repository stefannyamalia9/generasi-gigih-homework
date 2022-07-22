import React from "react";

const Form = (props) => {
    return (
        <div>
            <form>
                <input placeholder={props.placeholder} />
            </form>
            {props.children}
        </div>

    )
}
export default Form;