import React from "react";
import './ListItem.css';

const ListItem = ({music, onMusicClick}) => {
    return <li>{music.name}</li>
}

export default ListItem;