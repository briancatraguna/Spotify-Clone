import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import TopNavBar from '../components/TopNavBar';
import { MenuItem, Select } from '@material-ui/core';
import './style.css'

const ReccomendationsPage = () => {

    const {accessTokenBearer} = useSelector((state) => state.token);
    const [genres,setGenres] = useState([])

    const GENRES_BASE_URL = "https://api.spotify.com/v1/recommendations/available-genre-seeds"

    async function getGenres(){
        const response = await axios.get(GENRES_BASE_URL,{
            headers: {
                Authorization: accessTokenBearer
            }
        })
        setGenres(response.data.genres)
    }

    useEffect(() => {
        getGenres()
      }, []); 

    let selectComponent;
    if (genres.length>0 || genres==null){
        selectComponent = <Select className="selectStyle" labelId="label" id="genres">
            {genres.map((item)=>{
                return <MenuItem key={item} value={item}>{item}</MenuItem>
            })}
            <MenuItem value="hello">Hello</MenuItem>
        </Select>
    }

    return (
        <div>
            <TopNavBar title='recommendation'/>
            <h1>This is recomendations</h1>
            {selectComponent}
        </div>
    )
}

export default ReccomendationsPage;