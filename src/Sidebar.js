import React from 'react'
import "./Sidebar.css"
import { Avatar, IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
  return (
    <div className='sidebar'>
     <div className="sidebar__header">
        < Avatar src="https://assets-global.website-files.com/6410c4927a4ae326761f2b26/6410fa1aa6d20215635e027c_60eddf33bd254bfba23f621f_5f30f56e0622c7dece7d7271_25_kunal%25252525252520shah%25252525252520cred.png"/>
        <div className="sidebar__headerRight">
            <IconButton>
            <DonutLargeIcon />
            </IconButton>
            <IconButton>
                <ChatIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>

        </div>
     </div>


<div className="sidebar__search">
   <div className="sidebar__searchContainer">
    <SearchOutlinedIcon />
    <input placeholder="search or start new chat" type="text" />

   </div>
</div>

<div className="sidebar__chats" >
    <SidebarChat />
    <SidebarChat />
    <SidebarChat />
    <SidebarChat />
</div>
</div>
  );
}

export default Sidebar
