import React from 'react';
import {Consumer} from '../Context';
import PhotoContainer from '../PhotoContainer';

const Computers = () => {

    return(
        <Consumer>
            { context => {
                return(
                    <PhotoContainer imgData={context.featuredComputers} headingText="Images of: Computers"/>
                    
                );
            }}
        </Consumer>
    );
}

export default Computers