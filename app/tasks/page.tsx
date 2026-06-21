"use client";
import Link from "next/link";
import { useState } from "react";


type Task = {
  title: string;
  description: string;
  category: string;
  priority: string;
  completed: boolean;
};

export default function Tasks() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Work");
  const [priority, setPriority] = useState("Medium");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPriority, setFilterPriority] = useState("All");

  const [tasks, setTasks] = useState<Task[]>([]);
  const addTask = () => {
    if (title.trim() === "") return;

    if (editingIndex !== null) {
      const updatedTasks = [...tasks];

      updatedTasks[editingIndex] = {
        ...updatedTasks[editingIndex],
        title,
        description,
        category,
        priority,
      };

      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      const newTask: Task = {
        title,
        description,
        category,
        priority,
        completed: false,
      };

      setTasks([...tasks, newTask]);
    }

    setTitle("");
    setDescription("");
    setCategory("Work");
    setPriority("Medium");
  };

  const completeTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-8">
      <Link
  href="/dashboard"
  className="inline-block mb-4 bg-white text-purple-600 px-4 py-2 rounded-xl font-semibold"
>
  ← Dashboard
</Link>
      <h1 className="text-5xl font-bold text-white mb-2">
        🚀 Task Management
      </h1>

      <p className="text-white text-lg mb-8">
        Organize your daily tasks efficiently
      </p>

      <div className="bg-black/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl max-w-4xl mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          Create New Task
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="📝 Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-white text-gray-800 p-4 rounded-xl shadow-lg border-2 border-gray-200"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-white text-gray-800 p-4 rounded-xl shadow-lg border-2 border-gray-200"
          >
            <option>Work</option>
            <option>Personal</option>
            <option>Study</option>
          </select>
        </div>

        <textarea
          placeholder="📄 Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full mt-4 bg-white text-gray-800 p-4 rounded-xl shadow-lg border-2 border-gray-200"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full mt-4 bg-white text-gray-800 p-4 rounded-xl shadow-lg border-2 border-gray-200"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button
          onClick={addTask}
          className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold"
        >
          {editingIndex !== null ? "Update Task" : "Add Task"}
        </button>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-6">My Tasks</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="🔍 Search Tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white text-gray-800 p-4 rounded-xl shadow-lg border-2 border-gray-200"
          />

          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            className="bg-white text-gray-800 p-4 rounded-xl shadow-lg border-2 border-gray-200"
          >
            <option value="All">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {tasks.length === 0 ? (
          <p className="text-gray-600">No tasks added yet.</p>
        ) : (
          <ul className="space-y-4">
            {tasks
              .filter(
                (task) =>
                  task.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) &&
                  (filterPriority === "All" ||
                    task.priority === filterPriority)
              )
              .map((task, index) => (
                <li
                  key={index}
                  className="bg-gray-50 p-6 rounded-2xl shadow-lg"
                >
                  <h3 className="font-bold text-xl mb-2">
                    {task.completed ? "✅ " : ""}
                    {task.title}
                  </h3>

                  <p className="text-gray-600 mb-2">
                    {task.description}
                  </p>

                  <p>📂 Category: {task.category}</p>
                  <p className="mb-4">
                    🔥 Priority: {task.priority}
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => {
                        setTitle(task.title);
                        setDescription(task.description);
                        setCategory(task.category);
                        setPriority(task.priority);
                        setEditingIndex(index);
                      }}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                    >
                      Edit
                    </button>

                    {!task.completed && (
                      <button
                        onClick={() => completeTask(index)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg"
                      >
                        Complete
                      </button>
                    )}

                    <button
                      onClick={() => deleteTask(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}