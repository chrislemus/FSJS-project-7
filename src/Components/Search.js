import React from 'react';
import { Consumer } from './Context';
import PhotoContainer from './PhotoContainer';

const Search = ({match}) => {
    let query = match.params.query
    let count = 0;
    console.log(count)
    return(
        <Consumer>
            { context => {
                if (count === 0) {
                    context.handleImageSearch(query)
                    {/* setTimeout(() => { alert("Hello"); }, 3000); */}
                    count++
                }
                console.log(count)
                return (
                    <PhotoContainer imgData={context.searchImgs} headingText="Results"/>
                );
            }}
        </Consumer>
    );
}

export default Search;
