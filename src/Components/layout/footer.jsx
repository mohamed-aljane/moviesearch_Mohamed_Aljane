import React, { Component } from 'react'


class Footer extends Component {

    render() {
        return (
            <footer className="page-footer blue" style={{
                clear: 'both',
                position: 'relative',
                height: '180px',
                margintop: '-200px'
            }} >
                <div className="container">
                    <div className="row">
                        <div className="col  s12">
                            <h5 className="white-text"> <span style={{ fontFamily: "monospace" }}>Movies challenge app </span>🎬 </h5>
                            <p className="grey-text text-lighten-4">You can use this app to search your favorite movies.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                        </div>
                    </div>
                </div>

            </footer>)
    }
}
export default Footer;