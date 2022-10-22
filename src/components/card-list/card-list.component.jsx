import React from "react";
import './card-list.styles.css';
import { Card } from '../card/card.component'

export const CardList = props => (
    <div className="card-list">
    {props.aliens.map(alien => (
    <Card key={alien.id} alien={alien} />
    ))}
    </div>
);