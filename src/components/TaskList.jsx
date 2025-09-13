import React, { useContext } from 'react'
import { TaskList as TaskData } from '../store/task-list-store'
import Task from './Task.jsx'
import PendingTask from './PendingTask';
import WelcomeMessage from './WelcomeMessage.jsx';


const TaskList = () => {
    const sortOrder = {
        'high': 1,
        'medium': 2,
        'low': 3
    }

    const sortFun = (a, b) => {
        let aPriority = sortOrder[a.priority];
        let bPriority = sortOrder[b.priority]

        return aPriority - bPriority
    }

    const { taskList, deleteTask } = useContext(TaskData)
    const pendingTask = taskList.filter(item => item.isCompleted != true).sort((a, b) => sortFun(a, b));
    const completedTask = taskList.filter(item => item.isCompleted === true);

    console.log('length :', TaskData.length)
    return (
        <>
            {taskList.length === 0 && <WelcomeMessage />}

            {pendingTask.length > 0 && <h3 className='mt-4 mb-4'>Pending Task</h3>}
            {pendingTask.map(item =>
                <Task key={item.id} item={item} />
            )}
            {completedTask.length > 0 && <h3 className='mt-4 mb-4'>Completed Task</h3>}
            {completedTask.map(item => <Task key={item.id} item={item} />)}
        </>
    )
}

export default TaskList
