import React from 'react';
import Form from '../../components/input-form';
import Button from '../../components/button';
import Images from '../../components/images';
import Gif from '../../data/giphy';

function AddInputAndButton() {
    const imgsrc = "https://media.giphy.com/media/Vh8pbGX3SGRwFDh3v0/source.gif";
    return (
        <div>
            <Form placeholder="Type your giphy name">
                <Button buttonName="Search" />
            </Form>
            <Images imgSrc={Gif.url} />
        </div>
    )
}

export default AddInputAndButton;