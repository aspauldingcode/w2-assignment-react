/*a one to five-star rating component that allows users to rate
something (movies in this case, but remember that components are
reusable, so you could use it elsewhere!)*/

// import React, { Component } from 'react';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const stars = <FontAwesomeIcon icon={faStar}/>

export default class Stars extends Component {
    render() {
        return (
            <div>
                {stars}{stars}{stars}
            </div>
        );
    }
}
