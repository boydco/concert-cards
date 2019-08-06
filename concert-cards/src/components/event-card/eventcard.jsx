import React from 'react'
import moment from 'moment'

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

  const cleanFormattedDate = () => {
    let rawFormattedDate = getEventDateMomentBuild();
    let fullFormattedDate = moment(rawFormattedDate).format('MMMM Do, YYYY');
    return <span className="event-info-date">{fullFormattedDate}</span>
  }

  const cleanIconDate = () => {
     let rawIconDate = getEventDateMomentBuild();
     let formattedDay = moment(rawIconDate).format('ddd');
     let cleanMonth = moment(rawIconDate).month();
     let cleanDate = moment(rawIconDate).date();
     return <div className="event-date"><p className="event-date-icon-day">{formattedDay}</p>{cleanMonth} . {cleanDate}</div>;
   }

   const cleanEventTime = () => {
     let rawEventTime = getEventDateMomentBuild();
     let cleanEventTime = moment(rawEventTime).format('h:mmA')
     return <p>{cleanEventTime}</p>;
   }

   const cleanDoorsTime = () => {
     let rawDoorsTime = getEventDoorsMomentBuild();
     let cleanDoorsTime = moment(rawDoorsTime).format('h:mmA')
     return <p>{cleanDoorsTime}</p>;
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
            <span>Doors:  {cleanDoorsTime()}</span>
            <span>Show: {cleanEventTime()}</span>

            status: {props.event.status}
            price display: {props.event.prices.pricedisplay}
            venue : {props.event.venue.name}
            age limit: ages {props.event.agerestriction} and older
            facebookeventid: {props.event.facebookeventid}
        </div>
      </div>
    </div>
  )
}
