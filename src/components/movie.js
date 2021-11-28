// a component that represents movie data (i.e. image, synopsis, rating, etc…)

import React from 'react';
import ReviewList from './review-list';
import ReviewForm from './review-form';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: []
        };
    }

    reviewForm = (reviewContent, reviewRating) => {
        const randomId = Math.floor(Math.random() * 123903498);
        const newReview = {
            id: randomId,
            reviewContent,
            reviewRating,
        }
        this.setState({review: [...this.state.review, newReview] });
    }

    render() {
        return (
            <div className="center">
                <div className='card'>
                    <div className="card-header m-3">
                        <h2>{this.props.title}</h2>
                    </div>
                    <div className='card-body m-3'>
                        <img src={this.props.img} alt={this.props.title} width="300"/>
                        <p>{this.props.imdbRating}</p>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="card-footer m-3">
                        <ReviewList review={this.state.review}/>
                        <ReviewForm reviewForm={this.reviewForm}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}