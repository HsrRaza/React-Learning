import AddTask from "./components/AddTask"
import LoadTask from "./components/LoadTask"


function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col items-center text-stone-950 bg-stone-200 ">
        <AddTask/>
        <LoadTask/>

      </div>
    </>
  )
}

export default App
