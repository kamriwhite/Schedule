import React, { Component } from 'react';
import { connect } from 'react-redux';

import Gradient from '../gradient';
import ScheduleCourse from './scheduleCourse';
import ProgressTracker from './progressTracker';

class Schedule extends Component {

    renderCourses() {
        const data = this.props.courses
  
        return data.map((course, index) => {
            if(course.enrolled && this.amoutEnrolled != 5) {
                this.amoutEnrolled++;
                return <ScheduleCourse {...course} key={index}/>
            }
        })
    }

    render() {
        this.amoutEnrolled = 0
        return (
            <div className="schedule">
                <h1 className="schedule__title">My Schedule</h1>
                { this.renderCourses() }
                <ProgressTracker amountPossible={5} amoutEnrolled={this.amoutEnrolled}/>
                <Gradient/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      courses:  state.courses
    }
}

export default connect(mapStateToProps)(Schedule);