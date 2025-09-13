import React, { useContext, useState } from 'react'
import { RiDeleteBinFill } from "react-icons/ri";
import { MdCheckBox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { TaskList } from '../store/task-list-store';
import EditTaskModal from './EditTaskModal';

const Task = ({ item }) => {
    const [showModal, setShowModal] = useState(false);

    let cssClass = 'border-success';
    let bgClass = 'green';
    if (item.priority === 'high') {
        cssClass = 'border-danger';
        bgClass = 'red'
    }
    else if (item.priority === 'medium') {
        cssClass = 'border-warning';
        bgClass = 'yellow';
    }

    // if task is completed
    if (item.isCompleted === true) {
        cssClass = 'bg-grey';
        bgClass = ''
    }

    const { deleteTask, markAsDoneTask, markAsUndoneTask } = useContext(TaskList)
    return (
        <>
            <div key={item.id} className={`task-card card mb-3 ${cssClass} ${bgClass}`}>
                <div className='row g-0 align-items-center'>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card-body d-flex justify-content-between align-items-center">

                            <p className="mb-0">{item.dueDate}</p>

                            <div className='d-flex gap-3'>
                                {item.isCompleted ?
                                    <button
                                        className={`fs-3 border-0 bg-button`}
                                        title="Mark as undone"
                                        onClick={() => markAsUndoneTask(item.id)}
                                    >
                                        <MdCheckBoxOutlineBlank />
                                    </button> :
                                    <button
                                        className={`fs-3 border-0 bg-button`}
                                        title="Mark as done"
                                        onClick={() => markAsDoneTask(item.id)}
                                    >
                                        <MdCheckBox />
                                    </button>
                                }
                                <button
                                    className={`fs-3 border-0 bg-button`}
                                    title="Edit"
                                    onClick={() => setShowModal(true)}
                                >
                                    <FaEdit />
                                </button>
                                <button
                                    className={`fs-3 border-0 bg-button`}
                                    title="Delete this item"
                                    onClick={() => deleteTask(item.id)}
                                >
                                    <RiDeleteBinFill />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <EditTaskModal taskId={item.id} showModal={showModal} onClose={() => setShowModal(false)} />}
        </>
    )
}

export default Task
