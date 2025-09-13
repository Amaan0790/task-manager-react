import React, { useContext } from 'react'
import DashboardItem from './DashboardItem'
import { TaskList } from '../store/task-list-store'

const Dashboard = () => {
    const { taskList } = useContext(TaskList);
    const totalCompletedTask = taskList.filter(item => item.isCompleted === true).length;
    const totalPendingTask = taskList.length - totalCompletedTask;
    return (
        <>
            <div className='d-flex flex-wrap gap-5 justify-content-center align-items-center dashboard-container'>
                <DashboardItem task={totalCompletedTask} totalTask={taskList.length} text={'Completed'} />
                <DashboardItem task={totalPendingTask} totalTask={taskList.length} text={'Pending'} />

            </div>
        </>
    )
}

export default Dashboard
