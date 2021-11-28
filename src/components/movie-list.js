// a container for all the Movie components and their data.

import React, { Component } from 'react';
import Movie from './movie';
import UpsideDown from '../images/upsideDown.jpg';
import Titanic from '../images/titanic.jpg';
import TheAmazingSpiderMan2 from '../images/theAmazingSpiderMan2.jpg';

export default class MovieList extends Component {
    render() {

        //This code Detects if the web user has adblockers installed.
        fetch('http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js').catch(() => {
	    let adp_underlay = document.createElement('div');
	    adp_underlay.className = 'adp-underlay';
	    document.body.appendChild(adp_underlay);
	    let adp = document.createElement('div');
	    adp.className = 'adp';

        //prompt user to disable adblock extention if their adblock is enabled.
	    adp.innerHTML = `
	    	<h3>Ad Blocker Detected!</h3>
	    	<p>We don't even use ads on our website. But turn it off or Gandolf will smite you!</p>            
	    	<a href="#">Ew, Cringe!</a>
	    `;
	    document.body.appendChild(adp);
	    adp.querySelector('a').onclick = e => {
	    	e.preventDefault();
	    	document.body.removeChild(adp_underlay);
	    	document.body.removeChild(adp);
	    };
    }); 

        const movieArray = [

            {
                id: 1,
                title: "Upside Down",
                img: UpsideDown,
                description: "Adam and Eden fell in love as teens despite the fact that they live on twinned worlds with gravities that pull in opposite directions. Ten years after a forced separation, Adam sets out on a dangerous quest to reconnect with his love.",
                imdbRating: "IMDB Rating - 6.4"
            },

            {
                id: 2,
                title: "Titanic",
                img: Titanic,
                description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
                imdbRating: "IMDB Rating - 7.8"
            },

            {
                id: 3,
                title: "The Amazing Spider-Man 2",
                img: TheAmazingSpiderMan2,
                description: "When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as his loved ones.",
                imdbRating: "IMDB Rating - 6.5"
            }
        ];

        let movies;
        if (movieArray) {
            movies = movieArray.map((movie, id) => <Movie key={id} {...movie} />);
        }

        return (
            <div className='container'>
                <div className='center'>
                    {movies}
                </div>
            </div>
        )
    }
}
