import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import DashboardPage from "./pages/DashboardPage"
import IncomePage from "./pages/IncomePage"
import ExpensePage from "./pages/ExpensePage"


const App = () => {
  return (
    <div className="text-red-600">
      <BrowserRouter>
      <Routes>
        <Route to="/" element={<MainLayout/>}>

        <Route index element={<DashboardPage/>}/>
        <Route path="/income" element={<IncomePage/>}/>
        <Route path="/expense" element={<ExpensePage/>}/>

        </Route>
      </Routes>

      
      </BrowserRouter>
      </div>
  )
}

export default App