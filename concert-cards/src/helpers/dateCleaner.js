export const dateCleaner = (props) => {
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
