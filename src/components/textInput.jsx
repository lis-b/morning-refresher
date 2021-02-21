import React, { Component } from 'react';

class TextInput extends Component {
    state = {  }

    constructor(props){
        super(props);
        this.state={};
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({eventName: this.eventName.value});
        var time = [this.hour.value, this.minute.value];
        this.props.handleNewEvent(time, this.eventName.value);
        this.hour.value = '';
        this.minute.value = '';
        this.eventName.value = '';
        
    }
    render() { 
        return ( 
            <>
            <form onSubmit={this.handleSubmit}>
                <label1>
                    Time (24hr)
                    <input
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
                        type='text'
                        name= ":"
                        min='0'
                        max ='59'
                        ref={(minute) => this.minute = minute}
                        required
                        />
                </label3>
                <label2>
                    Event Name
                    <input
                        type='text'
                        name='Event Name'
                        ref={(eventName) => this.eventName = eventName}
                        required
                        />
                </label2>
                <button type = 'submit'>Click to Add Event</button>
            </form>
            <h3>EventName is: {this.state.eventName}</h3>
            </>
         );
    }
}
 
export default TextInput;