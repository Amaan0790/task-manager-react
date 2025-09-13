import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TaskList } from '../store/task-list-store';

const EditTaskModal = ({ showModal, onClose, taskId }) => {
    const navigate = useNavigate();

    const today = new Date().toISOString().split("T")[0];

    const { taskList, updateTask } = useContext(TaskList);
    const task = taskList.find(item => item.id === taskId);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("");

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setDueDate(task.dueDate);
            setPriority(task.priority);
        }
    }, [task]);

    const submitHanlder = (event) => {
        event.preventDefault();
        const fd = new FormData(event.target);
        const formObj = Object.fromEntries(fd.entries());
        formObj.id = taskId;
        updateTask(formObj);

        onClose();

    }

    if (!showModal) return null;

    return (
        <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Task</h5>
                        <button
                            type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            onClick={onClose}>
                        </button>
                    </div>
                    <form onSubmit={submitHanlder} className='pt-4'>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Task Title <span className='text-danger'>*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='title'
                                    id="title"
                                    value={title}
                                    onChange={(event) => setTitle(event.target.value)}
                                    minLength={3}
                                    required
                                />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Task Description</label>
                                <textarea type="text" className="form-control" id="description" rows={4} name='description'
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}></textarea>
                            </div>

                            <div className="row">

                                <div className="mb-3 col-6">
                                    <label htmlFor="dueDate" className="form-label">Due Date <span className='text-danger'>*</span></label>
                                    <input
                                        type="date" className="form-control" id="dueDate"
                                        name='dueDate'
                                        min={today}
                                        required
                                        value={dueDate}
                                        onChange={(event) => setDueDate(event.target.value)}
                                    />
                                </div>
                                <div className="mb-3 col-6">
                                    <label htmlFor="priority" className="form-label">Priority</label>
                                    <select className='form-control' name="priority" id="priority"
                                        value={priority}
                                        onChange={(event) => setPriority(event.target.value)}>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </div>

                            </div>


                        </div>
                        <div className="modal-footer">
                            <button
                                type="button" className="btn btn-secondary"
                                onClick={() => onClose()}>Close</button>
                            <button type="submit" className="btn btn-primary">Update Task</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default EditTaskModal
