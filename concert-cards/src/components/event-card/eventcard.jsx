import React from 'react'

import './eventcard.style.css';

export const EventCard = props => {
  return (
    <div className="card-container">
      <div className="card-img"><img alt={props.event.eventname} src={props.event.eventimages.large}/></div>
      <h2>{props.event.eventname}</h2>
      <div className="event-info">
        <p>prefix text: {props.event.prefixtext}</p>
          status: {props.event.status}
          start date: {props.event.dates.startdate}
          doors: {props.event.dates.doorsdate}
          price display: {props.event.prices.pricedisplay}
          venue : {props.event.venue.name}
          age limit: ages {props.event.agerestriction} and older
          facebookeventid: {props.event.facebookeventid}
      </div>
    </div>
  )
}
