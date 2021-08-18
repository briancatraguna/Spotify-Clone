import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const ReccomendationsPage = () => {

    const {accessTokenBearer} = useSelector((state) => state.token);

    console.log(accessTokenBearer);
    const GENRES_BASE_URL = "https://api.spotify.com/v1/recommendations/available-genre-seeds"

    const response = axios.get(GENRES_BASE_URL,{
        headers: {
            Authorization: accessTokenBearer
        }
    })

    console.log(response.data)

    // const SEED_ARTISTS = "4NHQUGzhtTLFvgF5SZesLK";
    // const SEED_TRACKS = "0c6xIDDpzE81m2q797ordA";
    

    return (
        <h1>This is recomendations</h1>
    )
}

export default ReccomendationsPage;