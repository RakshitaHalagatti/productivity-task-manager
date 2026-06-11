export default function Tasks() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">
        Task Management
      </h1>

      <div className="bg-white p-6 rounded-lg shadow max-w-xl">
        <input
          type="text"
          placeholder="Task Title"
          className="w-full p-3 border rounded mb-4"
        />

        <textarea
          placeholder="Task Description"
          className="w-full p-3 border rounded mb-4"
        />

        <select className="w-full p-3 border rounded mb-4">
          <option>Select Category</option>
          <option>Work</option>
          <option>Personal</option>
          <option>Study</option>
        </select>

        <select className="w-full p-3 border rounded mb-4">
          <option>Select Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Add Task
        </button>
      </div>
    </div>
  );
}