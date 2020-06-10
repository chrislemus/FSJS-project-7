import React from 'react';
import NoResultsMsg from './NoResultsMsg'


const Image = ({data}) => {
    let results;

    let images =  data.map((img) => {
        return ( <img id={img.id} key={img.id} alt={img.title} 
                 src={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} />)
    });
    
    let li = images.map((img, index) => {
        return (<li key={index}>{img}</li>)
    });

 

    if (data.length > 0) {
        results = li
    } else {
        results= <NoResultsMsg />
    }

    return(
        <ul>
            {results}
        </ul>
    );
}

export default Image;
