// A text review a user can leave on a movie.


import React, { Component } from 'react';

export default class Review extends Component {
    render() {
        return (
            <div className="card">
                <div className="card m-2">
                    <p>{this.props.reviewContent}</p>
                </div>
                <div className="card-footer m-1">
                    <p>{this.props.reviewRating}</p>
                </div>
            </div>
        )
    }
}

