export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Productivity Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-bold text-lg">Total Tasks</h2>
          <p className="text-3xl mt-2">12</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-bold text-lg">Completed</h2>
          <p className="text-3xl text-green-600 mt-2">8</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-bold text-lg">Pending</h2>
          <p className="text-3xl text-red-600 mt-2">4</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-bold text-lg">Progress</h2>
          <p className="text-3xl text-blue-600 mt-2">67%</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">
          Recent Tasks
        </h2>

        <ul className="space-y-2">
          <li>✅ Learn Next.js</li>
          <li>✅ Create Login Page</li>
          <li>⬜ Build Dashboard</li>
          <li>⬜ Complete Internship Project</li>
        </ul>
      </div>
    </div>
  );
}