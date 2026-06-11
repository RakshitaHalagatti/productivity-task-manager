export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">
        Productivity Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold">Total Tasks</h2>
          <p className="text-3xl">12</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold">Completed</h2>
          <p className="text-3xl text-green-600">8</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold">Pending</h2>
          <p className="text-3xl text-red-600">4</p>
        </div>
      </div>
    </div>
  );
}