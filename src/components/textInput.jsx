import React, { Component } from 'react';

class TextInput extends Component {
    state = {  }

    constructor(props){
        super(props);
        this.state={eventName: ""};
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({eventName: this.input.value});
        this.props.handleNewEvent(this.input.value);
        
    }
    render() { 
        return ( 
            <>
            <form onSubmit={this.handleSubmit}>
                <label htemlFor="eventName">eventName</label>
                <input
                    type='text'
                    name="EventName"
                    ref={(input) => this.input = input}
                    />
            </form>
            <h3>EventName is: {this.state.eventName}</h3>
            </>
         );
    }
}
 
export default TextInput;