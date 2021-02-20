import React, { Component } from 'react';

class Calander extends Component {
    state = { 
        count: 0,
        events: ['tag1', 'tag2', 'tag3']
     }

     constructor() {
         super();
         this.handleNewEvent = this.handleNewEvent.bind(this);
     }

     handleNewEvent() {
        this.setState({count: this.state.count + 1});
     }

     renderEvents(){
         if(EventSource.length === 0) return <p>No events scheduled today</p>;

         return <ul>{this.state.events.map(tag => <li key={tag}>{tag}</li>)}</ul>
     }

    render() { 
        return (
            <div>
                <span>{this.state.count}</span>
                {this.renderEvents()}
                <button onClick={this.handleNewEvent}>
                    Add new Event
                </button>
            </div>
            )
    }
}
 
export default Calander;