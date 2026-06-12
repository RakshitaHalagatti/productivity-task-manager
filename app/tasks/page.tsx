"use client";

import { useState } from "react";

export default function Tasks() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Work");
  const [priority, setPriority] = useState("Medium");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [tasks, setTasks] = useState<
    {
  title: string;
  description: string;
  category: string;
  priority: string;
  completed: boolean;
}[]
  >([]);

  const addTask = () => {
    if (title.trim() === "") return;

    const newTask = {
      title,
      description,
      category,
      priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);

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

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">
        Task Management
      </h1>

      <div className="bg-white p-6 rounded-lg shadow max-w-xl mb-8">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded mb-4"
        />

        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border rounded mb-4"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 border rounded mb-4"
        >
          <option>Work</option>
          <option>Personal</option>
          <option>Study</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-3 border rounded mb-4"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Add Task
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">
          My Tasks
        </h2>

        {tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="border p-4 rounded"
              >
                <h3 className="font-bold text-lg">
                  {task.completed ? "✅ " : ""}
                  {task.title}
                </h3>

                <p>{task.description}</p>

                <p>
                  Category: {task.category}
                </p>

                <p>
                  Priority: {task.priority}
                </p>
                <button
  onClick={() => {
    setTitle(task.title);
    setDescription(task.description);
    setCategory(task.category);
    setPriority(task.priority);
  }}
  className="bg-yellow-500 text-white px-4 py-2 rounded mt-3 mr-2"
>
  Edit
</button>

                {!task.completed && (
                  <button
                    onClick={() => completeTask(index)}
                    className="bg-green-600 text-white px-4 py-2 rounded mt-3 mr-2"
                  >
                    Complete
                  </button>
                )}

                <button
                  onClick={() =>
                    setTasks(
                      tasks.filter((_, i) => i !== index)
                    )
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded mt-3"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}