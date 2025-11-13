import { useTodoStore } from "../store/todoStore"

const DashboardPage = () => {

  const {todos, deleteTodo} = useTodoStore();

  return (
    <div className="flex items-center justify-between">
      <div>
        {todos.map( (todo) =>(
          <div key={todo.id} className="text-stone-950 flex gap-4">
             <p>{todo.text}</p>
             <button onClick={()=>deleteTodo(todo.id)} className="px-2 py-1 ">X</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage