import React, { useState, useEffect} from 'react';
import MusicDetail from '../components/MusicDetail';
import MusicList from '../components/MusicList';
import './MusicContainer.css';

const MusicContainer = () => {
    const[musics, setMusics] = useState([]);
    const [selectedMusic, setSelectedMusic] = useState(null);


    const getMusic = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(musics => setMusics(musics))
    }

    const onMusicClick = function(music){
        setSelectedMusic(music)
    }

    return (
        <div className="main-container">
            <MusicList musics={musics} onMusicClick={onMusicClick}/>
            { selectedMusic ? <MusicDetail music={selectedMusic}/> : null}
        </div>
    )
}

export default MusicContainer;