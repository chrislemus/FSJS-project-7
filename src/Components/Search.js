import React from 'react';
import { Consumer } from './Context';
import PhotoContainer from './PhotoContainer';

const Search = ({match}) => {
    let query = match.params.query
    let heading = `Results for: ${query}`
    let count = 0; //this will keep track how many times component is rendered
    let dataImporting = true; //photoContainer attribute to show loading spinner
    
    return(
        <Consumer>
            { context => {
                if (count === 0) {//IMPORTANT: this will make sure api call is triggered only once
                    //delays api call to prevent console error
                    setTimeout(() => { context.handleImageSearch(query) }, .1)
                    count++
                } 

                if (context.searchImgs.length > 0) { //this will remove loading spinner once all img data has been imported into component
                    dataImporting=false
                }
                return (
                    <PhotoContainer imgData={context.searchImgs} headingText={heading} dataImporting={dataImporting}/>
                );
            }}
        </Consumer>
    );
}

export default Search;
