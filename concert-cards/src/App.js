import React, { Component } from 'react';
import './App.css';

import { EventList } from './components/event-list/eventlist';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      events: []
    };
  }

  componentDidMount() {
    fetch('https://api.ticketweb.com/api/events?key=fjdklfjadklfjaldjfadoifjadodfja&version=1&orgId=217273&method=json')
    .then(response => response.json())
    .then(response => {
      let data = response.events;
      this.setState({
        events: data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <EventList events={this.state.events} />
        </header>
      </div>
    )
  }

}
