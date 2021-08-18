import React, { useState } from "react";
import PropTypes from 'prop-types';
import './style.css'

const TopNavBar = (props) => {

    const [page,setPage] = useState(props.title)

    function setReccomendation(){
        setPage("reccomendation")
    }

    function setHome(){
        setPage("home")
    }

    if (page == "home"){
        return(
            <div className="containerTopNavBar">
                <h2 className="selected">Create Playlists</h2>
                <h2 className="unselected" onClick={setReccomendation}>Reccomendations</h2>
            </div>
        )
    }
    return(
        <div className="containerTopNavBar">
            <h2 className="unselected" onClick={setHome}>Create Playlists</h2>
            <h2 className="selected">Reccomendations</h2>
        </div>
    )
    

    // if (props.title == "home"){
    //     return (
    //         <div className="containerTopNavBar">
    //             <h2 className="selected">Create Playlists</h2>
    //             <a href="http://localhost:3000/reccomendations">
    //                 <h2 className="unselected" onClick={}>Reccomendations</h2>
    //             </a>
    //         </div>
    //     )
    // }
    // return (
    //     <div className="containerTopNavBar">
    //         <a href="http://localhost:3000/create-playlist">
    //         <h2 className="unselected">Create Playlists</h2>
    //         </a>
    //         <h2 className="selected">Reccomendations</h2>
    //     </div>
    // )
}

export default TopNavBar;

TopNavBar.propTypes = {
    title : PropTypes.string
}