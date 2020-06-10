import React from 'react';
import { Consumer } from './Context'
import Spinner from 'react-bootstrap/Spinner';
import Image from './Image';


const PhotoContainer = ({imgData, headingText}) => {
  return(
      <Consumer>
          { context => {
              let images = <Image data={imgData} />;
              let heading;
              if (imgData.length > 0) {
                heading = <h2>{headingText}</h2>
              } 
              return(
                  <>
                      { (context.loading) ? 
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

