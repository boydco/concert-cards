import React from 'react'
import moment from 'moment'
import { Button } from "@ticketmaster/aurora";

import './eventcard.style.css';


export const EventCard = props => {

  const getEventDateMomentBuild = () => {
    let date = props.event.dates.startdate;
    let year = date.substring(0,4);
    let rawMonth = date.substring(4,6);
    let rawDay = date.substring(6,8);
    let rawEventHours = date.substring(8,10);
    let rawEventMin = date.substring(10,12);
    let rawEventTime = date.substring(8,12);
    let buildDate = year + '-' + rawMonth + '-' + rawDay + 'T' + rawEventHours + ':' + rawEventMin + ':00';
    return buildDate;
  }

  const getEventDoorsMomentBuild = () => {
    let date = props.event.dates.doorsdate;
    let year = date.substring(0,4);
    let rawMonth = date.substring(4,6);
    let rawDay = date.substring(6,8);
    let rawEventHours = date.substring(8,10);
    let rawEventMin = date.substring(10,12);
    let rawEventTime = date.substring(8,12);
    let buildDate = year + '-' + rawMonth + '-' + rawDay + 'T' + rawEventHours + ':' + rawEventMin + ':00';
    return buildDate;
  }

  const cleanIconDate = () => {
     let rawIconDate = getEventDateMomentBuild();
     let formattedDay = moment(rawIconDate).format('ddd');
     let cleanMonth = moment(rawIconDate).month();
     let cleanDate = moment(rawIconDate).date();
     return <div className="event-date"><p className="event-date-icon-day">{formattedDay}</p>{cleanMonth} . {cleanDate}</div>;
   }

  const cleanFormattedDate = () => {
    let rawFormattedDate = getEventDateMomentBuild();
    let fullFormattedDate = moment(rawFormattedDate).format('ddd MMMM Do, YYYY');
    return <span className="event-info-date">{fullFormattedDate}</span>
  }

   const cleanEventTime = () => {
     let rawEventTime = getEventDateMomentBuild();
     let cleanEventTime = moment(rawEventTime).format('h:mmA')
     return <span>{cleanEventTime}</span>;
   }

   const cleanDoorsTime = () => {
     let rawDoorsTime = getEventDoorsMomentBuild();
     let cleanDoorsTime = moment(rawDoorsTime).format('h:mmA')
     return <span>{cleanDoorsTime}</span>;
   }



  return (
    <div className="card-container" style={{backgroundImage: `url(${props.event.eventimages.large})`}}>
      <div className="card-overlay"></div>
      <div className="event-info-container">
        <p className="prefix-text">{props.event.prefixtext}</p>
        <h2>{props.event.eventname}</h2>
        <div className="event-date-icon">{cleanIconDate()}</div>
        <div className="event-info">
            {cleanFormattedDate()}
            <div className="event-time">
              <p>Doors:  {cleanDoorsTime()}</p>
              <p>Show: {cleanEventTime()}</p>
            </div>
            <p>{props.event.venue.name} | <span className="venue-location">{props.event.venue.city}, {props.event.venue.state}</span></p>
            <p>Ages {props.event.agerestriction} and older</p>


            <div className="ticket-box">
              {props.event.prices.pricedisplay}
              <div className="ticket-button">
                <Button variant="outline">
                   <span role="img" aria-label="tada">
                     🎉
                   </span>
                 </Button>
                <a target="_blank" className="buy-tix-btn" href={props.event.eventurl}>Buy Tickets</a>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
