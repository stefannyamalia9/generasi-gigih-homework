import React from "react";
import data from "../../data/second_giphy";
import Images from '../../components/images';



const dataFilter = data.filter((data => {
    return data.rating === 'g';
}))

const MapGiphywithFilterKey = () => {
    const DataFilterLoop = dataFilter.map((data) => <Images imgSrc={`${data.url}`} key={data.id} /> )
    return (
        <div>
            {DataFilterLoop}
        </div>
    )
}

export default MapGiphywithFilterKey;