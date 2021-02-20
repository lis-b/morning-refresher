import React, { Component } from 'react';

class Calander extends Component {
    state = { 
        count: 0,
        events: [1,2,3,4]
     }

     constructor() {
         super();
         this.handleNewEvent = this.handleNewEvent.bind(this);
         this.renderEvents = this.renderEvents.bind(this);
     }

     handleNewEvent() {
        this.setState({count: this.state.count + 1,
                       events: this.state.events.concat(this.state.count)});
     }

     renderEvents(){
         if(EventSource.length === 0) return <p>No events scheduled today</p>;
        
         return <ul>{this.state.events.map(item => (<li key={item}>{item}</li>))}</ul>;
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