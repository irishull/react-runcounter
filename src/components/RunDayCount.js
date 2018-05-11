import React from 'react'
import '../stylesheets/ui.scss'

const RunDayCount = React.createClass({
    render() {
        return (
            <div className="run-day-count">
                <div className="total-days">
                    <span>5 days</span>
                </div>
                <div className="stretch-days">
                    <span>2 days</span>
                </div>
                <div className="goal-days">
                    <span>1 goal reached</span>
                </div>
            </div>
        )
    }
})