import React from 'react';
import {Consumer} from '../Context'
import PhotoContainer from '../PhotoContainer';


const Cats = () => {

    return(
        <Consumer>
            { context => {
                return(
                    <PhotoContainer imgData={context.featuredCats} headingText="Images of: Cats"/>
                );
            }}
        </Consumer>
    );
}

export default Cats