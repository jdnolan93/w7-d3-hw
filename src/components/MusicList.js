import React from 'react';
import ListItem from './ListItem';

const MusicList = ({musics, onMusicClick }) => {

    const musicsItems = musics.map((music, index) => {
        return <ListItem music={music} key={index} onMusicClick={onMusicClick}/>
    })

    return (
        <div>
            <ul>
                {musicsItems}
            </ul>
        </div>
    )

}

export default MusicList;