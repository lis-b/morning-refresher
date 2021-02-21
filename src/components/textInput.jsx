import React, { Component } from 'react';

class TextInput extends Component {
    state = {  }

    constructor(props){
        super(props);
        this.state={};
    }

    handleSubmit = event => {
        event.preventDefault();
        var time = [this.hour.value, this.minute.value];
        this.props.handleNewEvent(time, this.eventName.value);
        this.hour.value = '';
        this.minute.value = '';
        this.eventName.value = '';
        
    }
    render() { 
        return ( 
            <div style={{textAlign:"center", top:"650px", position:"absolute"}}>
            <form onSubmit={this.handleSubmit}>
                <label1>
                    Time (24hr)
                    <input
                        style = {{width:"40px"}}
                        type='number'
                        name= "Time"
                        min='0'
                        max='23'
                        ref={(hour) => this.hour = hour}
                        required
                        />
                </label1>
                <label3>
                    :
                    <input
                        style = {{width:"20px"}}
                        type='text'
                        name= ":"
                        min='0'
                        max ='59'
                        ref={(minute) => this.minute = minute}
                        required
                        />
                </label3>
                <label2 style={{padding:"15px"}}>
                    <span style={{padding:"5px"}}>Event Name:</span>  
                    <input
                        style ={{width:"150px"}}
                        type='text'
                        name='Event Name'
                        ref={(eventName) => this.eventName = eventName}
                        required
                        />
                </label2>
                <button style={{borderRadius:"7px"}} type = 'submit'>Add Event</button>
            </form>
            </div>
         );
    }
}
 
export default TextInput;