import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import TopNavBar from '../components/TopNavBar';
import { Button, MenuItem, Select } from '@material-ui/core';
import './style.css'
import SongItem from '../components/SongItem';

const ReccomendationsPage = () => {

    const {accessTokenBearer} = useSelector((state) => state.token);
    const [genres,setGenres] = useState([])
    const [selectedGenre,setSelectedGenre] = useState("")
    const [recommendation,setRecommendation] = useState([])

    const GENRES_BASE_URL = "https://api.spotify.com/v1/recommendations/available-genre-seeds"
    const RECOMMENDATION_BASE_URL = "https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_genres="

    async function getGenres(){
        const response = await axios.get(GENRES_BASE_URL,{
            headers: {
                Authorization: accessTokenBearer
            }
        })
        setGenres(response.data.genres)
    }

    async function getRecommendation(){
        const response = await axios.get(`${RECOMMENDATION_BASE_URL}${selectedGenre}`,{
            headers: {
                Authorization: accessTokenBearer
            }
        })
        console.log(response.data.tracks)
        setRecommendation(response.data.tracks)
        console.log(recommendation)
    }

    useEffect(() => {
        getGenres()
      }, []); 

    function handleChange(e){
        setSelectedGenre(e.target.value);
        console.log(selectedGenre);
    }

    let selectComponent;
    if (genres.length>0 || genres==null){
        selectComponent = <Select onChange={handleChange} className="selectStyle" labelId="label" id="genres">
            {genres.map((item)=>{
                return <MenuItem key={item} value={item}>{item}</MenuItem>
            })}
            <MenuItem value="hello">Hello</MenuItem>
        </Select>
    }

    let listData;
    if (recommendation.length>0){
        listData = recommendation.map((item)=>{
            const status = false
            const type = "recommendation"
            return (
                <SongItem type={type}
                    key = {item.id}
                    imgUrl = {item.album.images[0].url}
                    songTitle = {item.name}
                    artist = {item.artists[0].name}
                    artistLink = {item.artists[0].external_urls.spotify}
                    id = {item.uri}
                    status = {status}
                />
            )
        })
    }

    return (
        <div>
            <TopNavBar title='recommendation'/>
            <br></br>
            {selectComponent}
            <Button variant="contained" color="primary" onClick={getRecommendation}>Get Recommendations!</Button>
            <div className="grid-container">
                {listData}
            </div>
        </div>
    )
}

export default ReccomendationsPage;