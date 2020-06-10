import React from 'react';
import { Consumer } from './Context'
import Spinner from 'react-bootstrap/Spinner';
import Image from './Image';


const PhotoContainer = ({imgData, headingText, dataImporting}) => {
  return(
      <Consumer>
          { context => {
              let images = <Image data={imgData} />; //img elements nested in li elements will be returned
              let heading;
              if (imgData.length > 0) { //heading will display if there are results to display
                heading = <h2>{headingText}</h2>
              } 
              return(
                  <>
                      { (context.loading || dataImporting ) ? //this is responsible for displaying spinner until img data has been imported into parent component
                          <Spinner animation="border" role="status" variant="primary">
                               <span className="sr-only">Loading...</span>
                          </Spinner>
                      :
                          <>
                            {heading}      
                            {images}
                          </>
                      }
                  </>
              );
          }}
      </Consumer>
  );
}

export default PhotoContainer

