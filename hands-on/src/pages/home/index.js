import React from 'react';
import Form from '../../components/input-form';
import Button from '../../components/button';
import MapGiphywithFilterKey from '../../function/filter_g';

function AddInputAndButton() {
    return (
        <div>
            <Form placeholder="Type your giphy name">
                <Button buttonName="Search" />
            </Form>
            <MapGiphywithFilterKey />
        </div>
    )
}

export default AddInputAndButton;