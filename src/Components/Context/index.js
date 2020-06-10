import React, { Component } from 'react';
import axios from 'axios';
import ApiKey from '../../data/config';




const galleryContext = React.createContext();

export class Provider extends Component {

    state = {
        loading: true,
        searchImgs: [],
        featuredCats: [],
        featuredDogs: [],
        featuredComputers: [],
    }



    componentDidMount() {
        this.handleImageSearch("cats", "featuredCats")
        this.handleImageSearch("dogs", "featuredDogs")
        this.handleImageSearch("computers", "featuredComputers")
    }
    
    handleImageSearch = (query = "cats", statePath = "searchImgs") => {
        this.setState({
            loading: true
        })
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(x => new Promise(resolve => setTimeout(() => resolve(x), 2000)))
        .then(response => {
            this.setState({
                [statePath]: response.data.photos.photo,
                loading: false
            })
        })
        .catch(error => {
            console.log("error fetching and parsing data", error);
        });
        
    
    };

    render() {
        return(
            <galleryContext.Provider value={{
                loading: this.state.loading,
                searchImgs: this.state.searchImgs,
                featuredCats: this.state.featuredCats,
                featuredDogs: this.state.featuredDogs,
                featuredComputers: this.state.featuredComputers,
                handleImageSearch: this.handleImageSearch
            }}>
                {this.props.children}
            </galleryContext.Provider>
        );
    }

}

export const Consumer = galleryContext.Consumer;