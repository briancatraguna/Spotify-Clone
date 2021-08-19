import React from 'react';
import { useState } from 'react';
import './style.css';
import PropTypes from 'prop-types';

type Props = {
    type: string,
    status: boolean,
    pushToSelectedList: any,
    deleteFromSelectedList: any,
    id: string,
    imgUrl: string,
    songTitle: string,
    artistLink: string,
    artist: string
}

const SongItem = ({
    type,status,pushToSelectedList,deleteFromSelectedList,id,imgUrl,songTitle,artistLink,artist
}: Props) => {

    const [statusState,setStatusState] = useState(status)

    const showAlert = () => {
        setStatusState(!statusState)
        if (!statusState){
            pushToSelectedList(id);
        } else {
            deleteFromSelectedList(id);
        }
    }

    let button: any;
    if (statusState === false){
        button = <button className="selectButton" onClick={showAlert}>Select</button>
    } else {
        button = <button className="deselectButton" onClick={showAlert}>Deselect</button>
    }

    console.log(type)
    if (type=="recommendation"){
        return (
            <div className="itemContainer">
                <img src={imgUrl} alt={`${songTitle}`}/>
                <p className="songTitle">{songTitle}</p>
                <a className="artist" href={artistLink}>{artist}</a>
            </div>
        )
    }

    return (
            <div className="itemContainer">
                <img src={imgUrl} alt={`${songTitle}`}/>
                <p className="songTitle">{songTitle}</p>
                <a className="artist" href={artistLink}>{artist}</a>
                <br></br>
                {button}
            </div>
    );
}

export default SongItem;

SongItem.propTypes = {
    type: PropTypes.bool,
    status: PropTypes.bool,
    pushToSelectedList: PropTypes.any,
    id: PropTypes.string,
    deleteFromSelectedList: PropTypes.any,
    imgUrl: PropTypes.string,
    songTitle: PropTypes.string,
    artistLink: PropTypes.string,
    artist: PropTypes.string,
}