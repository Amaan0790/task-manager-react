import React from 'react'

const WelcomeMessage = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-5 pt-5 text-center fs-2'>
            <p>You don't have any task.</p>
            <p className='fs-4'>Click on create task to add task in your list.</p>
            <p className='fw-bold text-primary'>Enjoy your day</p>
        </div>
    )
}

export default WelcomeMessage
