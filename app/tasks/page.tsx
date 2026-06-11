export default function Tasks() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">
        Task Management
      </h1>

      <div className="bg-white p-6 rounded-lg shadow max-w-lg">
        <input
          type="text"
          placeholder="Task Title"
          className="w-full p-3 border rounded mb-4"
        />

        <textarea
          placeholder="Task Description"
          className="w-full p-3 border rounded mb-4"
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Add Task
        </button>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">
          My Tasks
        </h2>

        <ul>
          <li>✅ Learn Next.js</li>
          <li>✅ Create Login Page</li>
          <li>⬜ Build Dashboard</li>
        </ul>
      </div>
    </div>
  );
}