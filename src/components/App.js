import React, { Component } from "react"; 
import {add_reminder,delete_reminder,clear_reminders} from '../actions';
import {connect} from 'react-redux';
import momment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../index.css'

class App extends Component {
  state = {
    text: '',
    date: new Date()
  }

  render_Reminders = ()=> {
    const {reminders} = this.props;
    return(
      <ul className="list-group">
      {
        reminders.map(reminder =>{
          return (
            <li key={reminder.id} className="list-group-item colorLi">
              <div>{reminder.text}</div>
              <div>{momment(new Date(reminder.date)).fromNow()}</div>
              <div className=" iconX btn  " onClick={() => this.props.delete_reminder(reminder.id)}>X</div>
            </li>
          )
        })
      }
    </ul>
    )
  }
  render() {
    return (
     <div className="App">
       <img src="https://www.pngfind.com/pngs/b/489-4890896_repair-icon-png.png" alt='reminder' />
       <div className="reminder-title">
           <h2>What Should U Do ?</h2>
       </div>
       <input type="text"  onChange={(e) => this.setState({text:e.target.value})} placeholder="Enter What U Do .. ?" className="form-control" value={this.state.text}/>
       <DatePicker
        className="form-control" 
        placeholderText="Select Date"
        value={this.state.date}
        selected={this.state.date}
        onChange={date => this.setState({date:date})}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="MMMM d, yyyy h:mm aa"
        />
       
       <button className="btn btn-primary btn-block"
                onClick={() => {
                  this.props.add_reminder(this.state.text,this.state.date)
                  this.setState({text:'',date:''})
                }}
                >Add Reminder</button>

      {this.render_Reminders()}
       <button className="btn btn-danger btn-block clearReminder"  onClick={() => this.props.clear_reminders()} >Clear</button>
     </div>
    );
  }
}

export default connect(   state =>{return{reminders: state}}
                          ,
                          {add_reminder
                          ,
                          delete_reminder
                          ,
                          clear_reminders}
                      )(App);
