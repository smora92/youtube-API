import React from "react";
import Building from "./Building";

const BuildingsList = ({ buildings, onBuildingSelect }) => { //the buildings object is the props
    const renderedList = buildings.map(building => {
        return (<Building
            key={building.id.videoId}
            building={building}
            onBuildingSelect={onBuildingSelect}
        />)
    })
    return <div className="ui relaxed divided list" >{renderedList}</div>
}
export default BuildingsList

//the videoSelect function is passed here as a prop