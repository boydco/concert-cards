import React from 'react'
import { EventCard } from '../event-card/eventcard'

import './eventlist.style.css';

export const EventList = props => {
  return (
    <div className="event-list">
      {props.events.map(event => (
        <EventCard key={event.eventid} event={event}></EventCard>
      ))}
    </div>
  )
}
