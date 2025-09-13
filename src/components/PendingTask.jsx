import React, { useContext } from 'react'
import { RiDeleteBinFill } from "react-icons/ri";
import { MdCheckBox } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { TaskList } from '../store/task-list-store';

const PendingTask = ({ item }) => {
    const { deleteTask, markAsDoneTask } = useContext(TaskList)

    return (
        <div key={item.id} className="card mb-3 ">
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
                            <button
                                className="fs-3 border-0 bg-white"
                                title="Mark as done"
                                onClick={() => markAsDoneTask(item.id)}
                            >
                                <MdCheckBox />
                            </button>
                            <button
                                className="fs-3 border-0 bg-white"
                                title="Edit"
                            >
                                <FaEdit />
                            </button>
                            <button
                                className="fs-3 border-0 bg-white"
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
    )
}

export default PendingTask
