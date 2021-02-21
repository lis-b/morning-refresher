import React, { Component } from 'react';
import TextInput from './textInput';


const styleSheet = {
    margin: "30px auto",
    width: "600px",
    height:"700px",
    boxSizing: "border-box",
    background: "#FEC8D8",
    padding:"40px"
    
}
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
         if(this.state.count === 0) return <p>No events scheduled today</p>;
        
         return <ul style={{padding:"25px"}}>{this.state.events.map(item => (<li sytle={{padding:"20px"}} key={item}>{item[0][0]+':'+item[0][1] + '        '+ item[1]}</li>))}</ul>;
     }

     renderCount(){
         var business = "";
         if(this.state.count == 0)
            business = "Take the day off!";
        else if(this.state.count <5)
            business = "A normal relaxing day.";
        else
            business = "Wow thats a lot of events!";
        return <p style={{textAlign:"center"}}>{this.state.count} events today. {business}</p>
     }

    render() { 
        return (
            <div style={styleSheet}>
                <h1 style={{color:"#875C36", textAlign:"center"}}> Today's Calendar</h1>
                <span>{this.renderCount()}</span>
                {this.renderEvents()}
                <TextInput  handleNewEvent = {this.handleNewEvent}/>
                
            </div>
            
            )
    }


}
 
export default Calander;