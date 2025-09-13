import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import TaskListProvider from './store/task-list-store'
import { Outlet } from 'react-router-dom'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <TaskListProvider>
        <Header />
        <main className='main-container my-2'>
          {/* <TaskList /> */}
          {/* <CreateTask /> */}
          <Outlet />
        </main>
        <Footer />
      </TaskListProvider>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
