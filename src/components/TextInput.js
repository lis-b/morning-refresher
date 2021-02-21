import React from 'react';

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
            <div className="text-input">
            <form onSubmit={this.handleSubmit}>
                  <b>Time (24h):</b>
                  <span>
                    <input
                        type = 'text'
                        name = 'Hours'
                        min = '0'
                        max = '23'
                        ref = {(hour) => this.hour = hour}
                        required
                        />

                    <span>:</span>
                    <input
                        type ='text'
                        name = 'Minutes'
                        min = '0'
                        max ='59'
                        ref = {(minute) => this.minute = minute}
                        required
                        />
                    </span>
                    <b>Event Name:</b>
                    <input
                        type='text'
                        name='Event Name'
                        ref={(eventName) => this.eventName = eventName}
                        required
                        />
                <button type="submit">Add Event</button>
            </form>
            </div>
         );
    }
}

export default TextInput;
