import React from 'react';
import './App.css';

const TrackList = (props) => {
    return(
        <div className='container'>
          <img src={props.src} alt={props.alt}/>
          <p>Title : </p>
          <p className='value'>{props.title}</p>
          <p>Album : </p>
          <p className='value'>{props.album}</p>
          <p>Artist : </p>
          <p className='value'>{props.artist}</p>
        </div>
    )
}

export default TrackList;