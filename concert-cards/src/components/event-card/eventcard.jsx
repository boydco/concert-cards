import React from 'react'
import moment from 'moment'

import './eventcard.style.css';

export const EventCard = props => {



 const cleanData = () => {
   let date = props.event.dates.startdate;

   let year = date.substring(0,4);
   let rawMonth = date.substring(4,6);
   let rawDay = date.substring(6,8);
   let rawEventHours = date.substring(8,10);
   let rawEventMin = date.substring(10,12);
   let rawEventTime = date.substring(8,12);
   let cleanMonth = (rawMonth[0] === '0') ? rawMonth.substr(1) : rawMonth;
   let cleanDate = (rawDay[0] === '0') ? rawDay.substr(1) : rawDay;
   let buildDate = year + '-' + rawMonth + '-' + rawDay + 'T' + rawEventHours + ':' + rawEventMin + ':00';
   let formattedDay = moment(buildDate).format('ddd');

   return <div className="event-date"><p className="event-date-icon-day">{formattedDay}</p>{cleanMonth} . {cleanDate}</div>;
 }



  return (
    <div className="card-container" style={{backgroundImage: `url(${props.event.eventimages.large})`}}>
      <div className="card-overlay"></div>
      <div className="event-info-container">
        <p className="prefix-text">{props.event.prefixtext}</p>
        <h2>{props.event.eventname}</h2>
        <div className="event-date-icon">{cleanData()}</div>
        <div className="event-info">
            status: {props.event.status}
            start date: {props.event.dates.startdate}
            doors: {props.event.dates.doorsdate}
            price display: {props.event.prices.pricedisplay}
            venue : {props.event.venue.name}
            age limit: ages {props.event.agerestriction} and older
            facebookeventid: {props.event.facebookeventid}
        </div>
      </div>
    </div>
  )
}
