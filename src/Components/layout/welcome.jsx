import React, { Component } from "react";
import { Link } from "react-router-dom";
class Welcome extends Component {
    render() {
        return (
            <div style={{ height: "70vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Hey there,</b>
                            <br />
                            <b>Welcome</b> to the Movies challenge  {" "}
                            <span style={{ fontFamily: "monospace" }}>App</span>
                        </h4>
                        <p className="flow-text grey-text text-darken-1">
                            this is the <span style={{ fontFamily: "monospace" }}>movies app</span>  👏
            </p>
                        <br />
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
                                Start
              </Link>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default Welcome;