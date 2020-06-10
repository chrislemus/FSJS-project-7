import React from 'react';
import {Consumer} from '../Context'
import PhotoContainer from '../PhotoContainer';

const Dogs = () => {
    return(
        <Consumer>
            { context => {
                return(
                    <PhotoContainer imgData={context.featuredDogs} headingText="Images of: Dogs" />
                );
            }}
        </Consumer>
    );
}

export default Dogs