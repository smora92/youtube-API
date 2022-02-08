import './Building.css'
import React from "react";

// class Building extends React.Component {

//     render() {
const Building = ({ building, onBuildingSelect }) => {

    return (
        <div onClick={() => onBuildingSelect(building)} className="building-item item">
            <img className="ui image"
                src={building.snippet.thumbnails.medium.url}
                alt={building.id.title}
            />
            <div className="content">
                <div className="header">{building.snippet.title}</div>
            </div>
        </div>
    )
}


export default Building
//call the onBuildingSelect here with the argument building for when someone clicks a particular buildingvideo