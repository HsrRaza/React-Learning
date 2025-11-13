import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayouts } from './layouts/MainLayouts'
import DashboardPage from './pages/DashboardPage'
import AddTodoPage from './pages/AddTodoPage'
import DeletePage from './pages/DeletePage'

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          
          <Route to="/" element={<MainLayouts />}>
            <Route index element={<DashboardPage />} />
            <Route path="/add" element={<AddTodoPage />} />
            <Route path="/delete" element={<DeletePage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App