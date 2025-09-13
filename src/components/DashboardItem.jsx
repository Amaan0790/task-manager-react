import React from 'react'

const DashboardItem = ({ task, totalTask, text }) => {
    return (
        <div className="my-card mt-5 shadow-lg rounded-4 p-4 text-center">
            <div>
                <span className="display-1 fw-bold text-primary">{task}</span>
                <span className="fs-1">/</span>
                <span className="fs-3 text-muted">{totalTask}</span>
            </div>

            <div className="display-6 mt-3 fw-semibold text-secondary">
                <p className="mb-1">No of</p>
                <p className="mb-1">{text}</p>
                <p className="mb-0">Task</p>
            </div>
        </div>
    )
}

export default DashboardItem
