import React from 'react';
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import './style.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';

type Props = {
    getData: any
}

const SearchBar = ({getData}: Props) => {

    const {accessTokenBearer} = useSelector((state: any) => state.token)

    const [textInput,setTextInput] = useState("");

    const handleChange = (e: any) => {
        setTextInput(e.target.value);
    }

    const handleSearch = () => {
        const query: string = textInput;
        const BASE_URL: string = "https://api.spotify.com/v1/search?q="
        const getSpotifySearch = async() => {
            try {
                const response: AxiosResponse<any> = await axios.get(`${BASE_URL}${query}&type=track&limit=30`,{
                    headers: {
                        'Authorization': accessTokenBearer
                    }
                })
                console.log(response.data);
                getData(response.data);
            } catch(error){
                console.error(error);
            }
        }
        getSpotifySearch();
    }

    return(
        <div>
            <TextField className="textField" label="Type in your track" type="text" value={textInput} onChange={handleChange}></TextField>
            <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
        </div>
    );
}

export default SearchBar;

SearchBar.propTypes = {
    getData: PropTypes.any
}
