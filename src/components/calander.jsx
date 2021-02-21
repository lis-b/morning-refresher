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
        this.setState({events: this.state.events.concat([[time, eventName]]).sort(function(a,b){
            if( a[0][0] == b[0][0] ) {
                if( a[0][1] == b[0][1]) return 0;
                else return a[0][1] < b[0][1]? -1:1;}
            return a[0][0] < b[0][0]? -1:1;
        }),
                       count: this.state.count + 1});
        
     }

     renderEvents(){
         if(EventSource.length === 0) return <p>No events scheduled today</p>;
        
         return <ul>{this.state.events.map(item => (<li key={item}>{item[0][0]+':'+item[0][1] + '        '+ item[1]}</li>))}</ul>;
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