import React from 'react';
import { useState } from 'react';
import './style.css';
import axios, { AxiosResponse } from 'axios';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';

type Props = {
    userId: string,
    selectedTracks: Array<string>
}

const CreatePlaylistForm = ({userId,selectedTracks}: Props) => {

    const {accessTokenBearer} = useSelector((state: any) => state.token)

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const handleSubmit = async (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        if (title.length<10 || description.length<20){
            alert("Title must be minimum 10 characters\nDescription must be minimum 20 characters!")
        } else {
            try {
                const endpoint: string = `https://api.spotify.com/v1/users/${userId}/playlists`;
                const response: AxiosResponse<any> = await axios.post(endpoint,{
                    name: title,
                    description: description,
                    collaborative: false,
                    public: false
                },{
                    headers: {
                        'Authorization': accessTokenBearer,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                const id: string = response.data.id;
                await axios({
                    method: 'post',
                    url: `https://api.spotify.com/v1/playlists/${id}/tracks`,
                    data: {
                      uris: selectedTracks
                    },
                    headers: {
                      'Authorization': accessTokenBearer,
                      "Accept": "application/json",
                      "Content-Type": "application/json"
                    }
                  }).then(()=>{
                      alert(`Succesfully created ${title} playlist!`)
                  })
            } catch(error){
                console.error(error);
            }
        }
    }
        

    const handleTitle = (e: React.ChangeEvent<any>) => {
        setTitle(e.target.value);
    }

    const handleDescription = (e: React.ChangeEvent<any>) => {
        setDescription(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField className="textField" variant="outlined" label="Title" onChange={handleTitle}/>
                <TextField className="textField" variant="outlined" label="Description" onChange={handleDescription}/>
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>
        </div>
    );
}

export default CreatePlaylistForm;

CreatePlaylistForm.propTypes = {
    userId: PropTypes.string,
    selectedTracks: PropTypes.array,
}