import React from 'react';

function AddInputAndButton() {
    const imgsrc = "https://media.giphy.com/media/Vh8pbGX3SGRwFDh3v0/source.gif";
    return(
        <div>
            <form>
                <input/>
                <button>Search</button>
            </form>
            <img src={imgsrc} alt="img"/>
        </div>
    )
}

export default AddInputAndButton;