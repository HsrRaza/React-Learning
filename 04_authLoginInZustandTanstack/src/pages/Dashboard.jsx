

import { useState } from "react";

import { useUIStore } from "../store/uiStore";
import { useTasks } from "../hooks/useTask";

export default function Dashboard() {
  const { data: tasks, isLoading } = useTasks();
  const { sidebarOpen, toggleSidebar } = useUIStore();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  if (isLoading) return <p>Loading tasks...</p>;

  const filtered = tasks
    ?.filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))
    ?.filter((t) => (status === "all" ? true : t.status === status));

  return (
    <div className="dashboard">
      <button onClick={toggleSidebar}>
        {sidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
      </button>

      <div className="filters">
        <input
          placeholder="Search task..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">All</option>
          <option value="todo">To-do</option>
          <option value="progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <ul>
        {filtered?.map((task) => (
          <li key={task.id}>
            <b>{task.title}</b> — {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
