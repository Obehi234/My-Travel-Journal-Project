import React from "react"


export default function Main(props) {
    return (
        <div className="main">
            <div className= "kyoto">
                <img src={`../images/${props.element.imageUrl}`} className ="img-cover" />
            </div>
            
        <div className="location-description">
            <div className="geo-description">
                    <img src="../images/location-removebg-preview.png" alt="location" className= "icon" /> 
                    <span><h4 className = "japan">{props.element.location}</h4></span>  
                    <span><a href={props.element.googleMapsUrl}>View on Google Maps </a></span>  
                </div>
            <div className="geo-text">
                <h2>{props.element.title}</h2>
                <small><span>{props.element.startDate} - {props.element.endDate}</span></small>
                <p className="text-description">{props.element.description}</p>  </div>  
            </div>       
        </div>
    )
}