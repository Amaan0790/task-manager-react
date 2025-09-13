import React, { createContext, useReducer } from 'react'
import { toast } from "react-toastify";


export const TaskList = createContext({
    taskList: [],
    addTask: () => { },
    deleteTask: () => { },
    markAsDoneTask: () => { },
    markAsUndoneTask: () => { },
    updateTask: () => { }
})

const taskListReducer = (current, action) => {
    let newTaskList = current;

    if (action.type === 'ADD_TASK') {
        newTaskList = [action.payload, ...current]
    }
    else if (action.type === 'DELETE_TASK') {
        newTaskList = current.filter(item => item.id !== action.payload);
    }
    else if (action.type === 'MARK_DONE') {
        newTaskList = current.map(item => item.id === action.payload ? { ...item, isCompleted: true } : item);

    }
    else if (action.type === 'MARK_UNDONE') {
        newTaskList = current.map(item => item.id === action.payload ? { ...item, isCompleted: false } : item);
    }
    else if (action.type === 'UPDATE_TASK') {
        newTaskList = current.map(item => item.id === action.payload.id ? action.payload : item);
    }
    return newTaskList;
}

const TaskListProvider = ({ children }) => {
    const [taskList, taskListDispatch] = useReducer(taskListReducer, []);

    const addTask = (data) => {
        taskListDispatch({
            type: 'ADD_TASK',
            payload: data
        })
        toast.success("Task Added!", {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
    }

    const deleteTask = (taskId) => {
        taskListDispatch({
            type: 'DELETE_TASK',
            payload: taskId
        })
        toast.error("Task Deleted!", {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
    }
    const markAsDoneTask = (taskId) => {
        taskListDispatch({
            type: 'MARK_DONE',
            payload: taskId
        })
        toast.info("Task Mark As Done!", {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
    }

    const markAsUndoneTask = (taskId) => {
        taskListDispatch({
            type: 'MARK_UNDONE',
            payload: taskId
        })
        toast.warning("Task Mark As Undone!", {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
    }

    const updateTask = (task) => {
        taskListDispatch({
            type: 'UPDATE_TASK',
            payload: task
        })
        toast.success("Task Updated!", {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
    }
    return (
        <>
            <TaskList.Provider value={
                {
                    taskList: taskList,
                    addTask: addTask,
                    deleteTask: deleteTask,
                    markAsDoneTask: markAsDoneTask,
                    markAsUndoneTask: markAsUndoneTask,
                    updateTask: updateTask
                }
            }>
                {children}
            </TaskList.Provider>
        </>
    )
}

// const initialTask = [
//     {
//         id: 1,
//         title: 'Complete home work',
//         description: 'This is some description of the task',
//         dueDate: '2025-09-08',
//         priority: 'high',
//         isCompleted: false,
//     },
//     {
//         id: 2,
//         title: 'Complete home work',
//         description: 'This is some description of the task',
//         dueDate: '2025-09-12',
//         priority: 'low',
//         isCompleted: false,
//     }
// ]

const initialTask = [
    {
        id: 1,
        title: "Complete React project",
        description: "Finish the dashboard and integrate API with context",
        dueDate: "2025-09-08",
        priority: "high",
        isCompleted: false,
    },
    {
        id: 2,
        title: "Buy groceries",
        description: "Milk, eggs, vegetables, and bread from supermarket",
        dueDate: "2025-09-10",
        priority: "low",
        isCompleted: false,
    },
    {
        id: 3,
        title: "Team meeting",
        description: "Weekly sync with frontend and backend teams",
        dueDate: "2025-09-07",
        priority: "medium",
        isCompleted: true,
    },
    {
        id: 4,
        title: "Doctor Appointment",
        description: "Annual health checkup at 10 AM",
        dueDate: "2025-09-12",
        priority: "high",
        isCompleted: false,
    },
    {
        id: 5,
        title: "Pay electricity bill",
        description: "Online payment before due date",
        dueDate: "2025-09-05",
        priority: "medium",
        isCompleted: true,
    },
    {
        id: 6,
        title: "Read a book",
        description: "Finish reading 'Atomic Habits' before weekend",
        dueDate: "2025-09-15",
        priority: "low",
        isCompleted: false,
    },
    {
        id: 7,
        title: "Gym workout",
        description: "Leg day workout session in the evening",
        dueDate: "2025-09-07",
        priority: "medium",
        isCompleted: false,
    },
    {
        id: 8,
        title: "Prepare resume",
        description: "Update with latest projects and experiences",
        dueDate: "2025-09-09",
        priority: "high",
        isCompleted: false,
    },
    {
        id: 9,
        title: "Call parents",
        description: "Evening call to check in with family",
        dueDate: "2025-09-06",
        priority: "low",
        isCompleted: true,
    },
    {
        id: 10,
        title: "Practice coding",
        description: "Solve 3 problems on LeetCode",
        dueDate: "2025-09-08",
        priority: "medium",
        isCompleted: false,
    },
];

export default TaskListProvider
