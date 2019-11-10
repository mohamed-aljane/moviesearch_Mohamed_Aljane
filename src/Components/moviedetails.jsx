import React, { Component } from 'react'

import { Link } from 'react-router-dom'
class MovieDetails extends Component {


    render() {
        const { movie } = this.props.location.state;
        let src = movie.show.image ? movie.show.image.original : 'https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg'
        console.log(movie)
        return (
            <div style={{ height: "100%", minHeight: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b> <span style={{ fontFamily: "monospace" }}> {movie.show.name}</span> </b>
                            <br />
                            <br />
                            <a href={movie.show.url} target="blank" style={{ color: "#2196F3" }} ><b>visit movie page  {" "} </b></a>
                        </h4>
                        <br />
                        <img src={src} alt={movie.show.name} />
                        <br />
                        <h5> <span style={{ fontFamily: "monospace", fontSize: "30px" }}>Score : {" "} </span> {movie.score} </h5>
                        <br />
                        <h5> <b> <span style={{ fontFamily: "monospace" }}> {movie.show.type}</span> </b>  </h5>
                        {movie.show.genres[0] &&
                            <div className="col s12 ">
                                <b> <span style={{ fontFamily: "monospace", fontSize: "30px" }}>Genres : {" "} </span> </b>
                                {movie.show.genres.map((genre, i) => {
                                    return <span key={i} className="flow-text grey-text  text-darken-1" > <b>{genre} {i === movie.show.genres.length - 1 ? "  " : " - "}  </b></span>
                                })}
                                <br />
                            </div>}


                        <h5> <span style={{ fontFamily: "monospace", fontSize: "30px" }}>Language : {" "} </span> {movie.show.language} </h5>
                        <h5>{movie.show.status}</h5>
                        <div style={{ fontSize: "22px" }}>
                            <div dangerouslySetInnerHTML={{ __html: movie.show.summary }} />
                            <p>this show premiered on : {movie.show.premiered} </p>
                        </div>
                        <div className="col s12 ">
                            <h5><b> <span style={{ fontSize: "20px" }}>watch {movie.show.name}   {movie.show.schedule.time ? "at  " : ""} </span> {movie.show.schedule.time} {movie.show.schedule.days[0] ? "on  " : ""} </b>
                                {movie.show.schedule.days.map((day, i) => {
                                    return <span key={i} className="flow-text   text-darken-1" > <b>{day} {i === movie.show.schedule.days.length - 1 ? "  " : " , "}  </b></span>
                                })}
                                <br /><br />exclusively on {movie.show.network.name} </h5>
                        </div>
                        <div className="col s12">
                            <Link
                                to="/searchmovies"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Go back
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}
export default MovieDetails;