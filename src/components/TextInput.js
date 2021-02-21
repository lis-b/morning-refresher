import React from 'react';

import './TextInput.sass';

class TextInput extends React.Component {
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
            <div className="add">
            <form onSubmit={this.handleSubmit}>
              <div className="time">
                  <span>Time (24h):</span>
                    <input
                        type = 'text'
                        name = 'Hours'
                        min = '0'
                        max = '23'
                        ref = {(hour) => this.hour = hour}
                        required
                        />

                    :
                    <input
                        type ='text'
                        name = 'Minutes'
                        min = '0'
                        max ='59'
                        ref = {(minute) => this.minute = minute}
                        required
                        />
              </div>
              <div className="event">
                    <span>Event Name:</span>
                    <input
                        style ={{width:"150px"}}
                        type='text'
                        name='Event Name'
                        ref={(eventName) => this.eventName = eventName}
                        required
                        />
                </div>
                <button type="submit">Add Event</button>
            </form>
            </div>
         );
    }
}

export default TextInput;
