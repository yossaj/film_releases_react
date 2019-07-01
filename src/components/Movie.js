import React, { Component } from "react";

class Movie extends Component {
    render() {
        return (
            <div className="upcoming">
                <h2>{this.props.title}</h2>
                <p><a href="{this.props.url}">Learn More at IMDB</a></p>
            </div>
        );
    }
}

export default Movie;