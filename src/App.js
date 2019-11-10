import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Components/layout/navbar';
import Welcome from './Components/layout/welcome';
import Footer from './Components/layout/footer';
import SearchMovies from './Components/searchmovies';
import MovieDetails from './Components/moviedetails';



export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app" style={{ backgroundColor: "#F9F9F9" }}>
          <Navbar />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/searchmovies" component={SearchMovies} />
          <Route exact path="/moviedetails/:name" component={MovieDetails} />
          <Footer />


        </div>
      </Router>
    );
  }
}
