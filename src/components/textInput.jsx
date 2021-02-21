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
        this.props.handleNewEvent(this.time.value + "   " + this.eventName.value);
        this.time.value = '';
        this.eventName.value = '';
        
    }
    render() { 
        return ( 
            <>
            <form onSubmit={this.handleSubmit}>
                <label1>
                    Time
                    <input
                        type='text'
                        name= "Time"
                        ref={(time) => this.time = time}
                        />
                </label1>
                <label2>
                    Event Name
                    <input
                        type='text'
                        name='Event Name'
                        ref={(eventName) => this.eventName = eventName}
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