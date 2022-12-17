import React from "react";
import { Text } from "react-native-paper";
import NintendoIcon from "../components/Icons/NintendoIcon";
import PlaystationIcon from "../components/Icons/PlaystationIcon";
import SteamIcon from "../components/Icons/SteamIcon";
import XboxIcon from "../components/Icons/XboxIcon";
import { tailwind } from "../../tailwind";
import fetchData from "../api/rawg";



export const getIcon = (platform) => {

    switch (platform) {
        
        case 'Xbox' : 
        return <XboxIcon size = {14} />

        case 'Playstation': 
        return <PlaystationIcon size ={16} />

        case 'PC': 
        return <SteamIcon size = {13} />

        case 'Nintendo': 
        return <NintendoIcon size={16} />

        default:
            return console.warn(platform)
    }
}