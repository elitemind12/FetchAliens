import React from "react";
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.alien.id}?set=set2=50*50`} alt="alien" />
        <h2>{props.alien.name}</h2>
        <p>{props.alien.email}</p>
    </div>
)