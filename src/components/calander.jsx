import React, { Component } from 'react';
import TextInput from './textInput';

class Calander extends Component {
    state = { 
        count: 0,
        events: []
     }

     constructor(props) {
         super(props);
         this.handleNewEvent = this.handleNewEvent.bind(this);
         this.renderEvents = this.renderEvents.bind(this);
     }

     handleNewEvent(time, eventName) {
        this.setState({events: this.state.events.concat(eventName),
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
                <TextInput  handleNewEvent = {this.handleNewEvent}/>
                
            </div>
            
            )
    }
}
 
export default Calander;