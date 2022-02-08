import React from "react";


const BuildingDetail = ({ building }) => { //{building} is props.building
    if (!building) {
        return <div className="ui loading segment">Loading...</div>
    }

    return (<div>
        <div className="ui embed">
            <iframe src={`https://www.youtube.com/embed/${building.id.videoId}`} title={building.snippet.title} />
        </div>
        <div className="ui segment">
            <h4 className="ui header">{building.snippet.title}</h4>
            <p className="">{building.snippet.description}</p>
        </div>
    </div>)

}

export default BuildingDetail