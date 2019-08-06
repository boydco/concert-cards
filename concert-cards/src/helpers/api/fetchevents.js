export const fetchEvents = () => {
    fetch('https://api.ticketweb.com/api/events?key=fjdklfjadklfjaldjfadoifjadodfja&version=1&orgId=217273&method=json')
    .then(response => response.json())
    .then(response => {
      let data = response.events;
      this.setState({
        events: data
      })
    })
}
