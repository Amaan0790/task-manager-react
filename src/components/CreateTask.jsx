import React, { useContext, useState } from 'react'
import { TaskList } from '../store/task-list-store';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {
    const navigate = useNavigate()
    const today = new Date().toISOString().split("T")[0];
    const { addTask } = useContext(TaskList);

    const submitHandler = (event) => {
        event.preventDefault();

        const fd = new FormData(event.target);
        const formObj = Object.fromEntries(fd.entries());
        formObj.id = Date.now();
        console.log(formObj);
        addTask(formObj);

        event.target.reset();
        navigate('/');
    }

    return (
        <form onSubmit={submitHandler} className='pt-4'>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Task Title <span className='text-danger'>*</span></label>
                <input
                    type="text"
                    className="form-control"
                    name='title'
                    id="title"
                    minLength={3}
                    required
                />

            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Task Description</label>
                <textarea type="text" className="form-control" id="description" rows={4} name='description'></textarea>
            </div>

            <div className="row">

                <div className="mb-3 col-6">
                    <label htmlFor="dueDate" className="form-label">Due Date <span className='text-danger'>*</span></label>
                    <input
                        type="date" className="form-control" id="dueDate"
                        name='dueDate'
                        min={today}
                        required
                    />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="priority" className="form-label">Priority</label>
                    <select className='form-control' name="priority" id="priority">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

            </div>
            <button type="submit" className="btn btn-primary">Create Task</button>
        </form>
    )
}

export default CreateTask
