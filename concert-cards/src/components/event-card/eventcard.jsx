import React from 'react'

import './eventcard.style.css';

export const EventCard = props => {
  return (
    <div className="card-container">
      <div className="card-img"><img alt={props.event.eventname} src={props.event.eventimages.large}/></div>
      <h2>{props.event.eventname}</h2>
    </div>
  )
}
