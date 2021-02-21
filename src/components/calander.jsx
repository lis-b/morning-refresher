import React, { Component } from 'react';
import TextInput from './textInput';

class Calander extends Component {
    state = { 
        count: 0,
        events: []
     }

     constructor() {
         super();
         this.handleNewEvent = this.handleNewEvent.bind(this);
         this.renderEvents = this.renderEvents.bind(this);
     }

     handleNewEvent() {
        this.setState({events: this.state.events.concat(this.state.count),
                       count: this.state.count + 1});
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
                <TextInput/>
                
            </div>
            
            )
    }
}
 
export default Calander;