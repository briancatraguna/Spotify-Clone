import React from 'react';
import { useState } from 'react';
import SectionTitle from '../components/SectionTitle/index';
import SongItem from '../components/SongItem/index';
import SearchBar from '../components/SearchBar/index';
import CreatePlaylistForm from '../components/CreatePlaylistForm/index';
import axios, { AxiosResponse } from 'axios';
import './style.css';
import { useSelector } from 'react-redux';

const HomePage = () => {
    
    const {accessTokenBearer} = useSelector((state: any) => state.token)

    const initialData: any = null
    const [data,setData] = useState(initialData);
    const [selectedList,setSelectedList] = useState([""]);
    const [userId,setUserId] = useState("");

    const getData = (data: any) => {
        setData(data);
    }

    const pushToSelectedList = (id: string) => {
        const currentList: string[] = selectedList;
        currentList.push(id);
        setSelectedList(currentList);
    }

    const deleteFromSelectedList = (id: string) => {
        const currentList: string[] = selectedList;
        for (var i = 0;i<selectedList.length;i++){
            if (selectedList[i] === id){
                currentList.splice(i,1);
            }
        }
        setSelectedList(currentList);
    }

    const getStatus = (id: string) => {
        let status: boolean = false;
        for (var i = 0;i<selectedList.length;i++){
            if (selectedList[i] === id){
                status = true
            }
        }
        return status;
    }

    const getCurrentUserId = async() => {
        try {
            const response: AxiosResponse<any> = await axios.get("https://api.spotify.com/v1/me?",{
                headers: {
                    Authorization: accessTokenBearer,
                }
            })
            setUserId(response.data.id)
        } catch(error){
            console.error(error);
        }
    }

    let listData;
    if (data != null){
        listData = data.tracks.items.map((item: any)=>{
            const status = getStatus(item.uri)
            return (
                <SongItem
                    key = {item.id}
                    imgUrl = {item.album.images[0].url}
                    songTitle = {item.album.name}
                    artist = {item.artists[0].name}
                    artistLink = {item.artists[0].external_urls.spotify}
                    id = {item.uri}
                    status = {status}
                    pushToSelectedList = {pushToSelectedList}
                    deleteFromSelectedList = {deleteFromSelectedList}
                />
            )
        })
    }

    getCurrentUserId();
    return(
        <div className="App">
            <CreatePlaylistForm userId={userId} selectedTracks={selectedList}></CreatePlaylistForm>
            <SectionTitle title="Search your favorite albums!"/>
            <br></br>
            <SearchBar getData={getData}></SearchBar>
            <br></br>

            <div className="grid-container">
                {listData}
            </div>
            
        </div>
    );
}

export default HomePage;