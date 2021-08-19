import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import {Link} from 'react-router-dom';

const TopNavBar = (props) => {

    if (props.title == "home"){
        return (
            <div className="containerTopNavBar">
                <h2 className="selected">Create Playlists</h2>
                <Link to='/recommendations'>
                    <h2 className="unselected">Reccomendations</h2>
                </Link>
            </div>
        )
    }
    return (
        <div className="containerTopNavBar">
            <Link to='create-playlist'>
                <h2 className="unselected">Create Playlists</h2>
            </Link>
            <h2 className="selected">Reccomendations</h2>
        </div>
    )
}

export default TopNavBar;

TopNavBar.propTypes = {
    title : PropTypes.string
}