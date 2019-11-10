import React, { Component } from 'react';
import axios from 'axios';

import MovieCard from './moviecard'


class SearchMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            search: '',
            movies: [],
        }
        this.handleChange = this.handleChange.bind(this);


    }

    componentDidMount() {
        axios
            .get('https://api.tvmaze.com/search/shows?q=test')
            .then(res => {
                this.setState({ movies: res.data })

            })
    }
    handleChange = (e) => {
        this.setState({ search: e.target.value });
    }
    render() {
        const { search } = this.state;
        const filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.show.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
            }
        );
        return (
            <div style={{ height: "100%", minHeight: '75vh' }} className="container halign-wrapper">
                <div className="row ">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Hello</b> again, {" "}
                        </h4>
                        <p className="flow-text grey-text text-darken-1">
                            you can searh <span style={{ fontFamily: "monospace" }}>movies</span>  here  📽️
                         </p>
                        <div className="input-field col s12">
                            <input id="search" type="text" className="validate" value={search} onChange={this.handleChange} />
                            <label htmlFor="search" className="active">search your favorite movie</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {filteredMovies.map((movie, i) => {
                            return <div className="col" style={{ margin: '5px' }} key={i}><MovieCard movie={movie} /></div>
                        })}
                    </div>
                </div>
            </div>
        );
    }


}
export default SearchMovies;