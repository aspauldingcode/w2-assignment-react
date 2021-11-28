/* a form at the bottom of a Movie component that allows users
to leave reviews. When submitted, the review should be added to 
the movie. All this data can be stored in an array, no networking 
or database needed for this assignment.*/

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const stars = <FontAwesomeIcon icon={faStar}/>
console.log(stars);

export default class ReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviewContent: '',
            reviewRating: '★',
        }
    }

    onSubmit = (i) => {
        i.preventDefault();
        this.props.reviewForm(this.state.reviewContent, this.state.reviewRating);
        this.setState({reviewContent: '', reviewRating: ''})
    }

    onChange = (i) => this.setState({ [i.target.name]: i.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="container">
                    <label htmlFor="reviewContent" className="form-label">
                        Leave a review!
                    </label>
                    <input type="textarea" name="reviewContent" className="form-control" id="reviewContent" placeholder='This movie is...' value={this.state.reviewContent} onChange={this.onChange}></input>
                </div>
                <label htmlFor="reviewRating">Rate this movie!</label>
                <select name='reviewRating' value={this.state.reviewRating} onChange={this.onChange}>
                    {/* <option value='★'>Please select rating</option> */}
                    <option value='★'>One Star</option>
                    <option value='★★'>Two Stars</option>
                    <option value='★★★'>Three Stars</option>
                    <option value='★★★★'>Four Stars</option>
                    <option value='★★★★★'>Five Stars</option>
                </select>           
                <button type="submit" className="btn btn-primary">Submit Review</button>
            </form>
        )
    }
}

