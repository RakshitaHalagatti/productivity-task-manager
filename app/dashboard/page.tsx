import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-center mb-8">
        Productivity Dashboard
      </h1>

      <div className="flex justify-center mb-8">
        <Link href="/tasks">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Go To Tasks
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">
            Total Tasks
          </h2>
          <p className="text-5xl mt-4 font-bold">
            12
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">
            Completed
          </h2>
          <p className="text-5xl mt-4 font-bold text-green-600">
            8
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">
            Pending
          </h2>
          <p className="text-5xl mt-4 font-bold text-red-600">
            4
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">
            Progress
          </h2>
          <p className="text-5xl mt-4 font-bold text-blue-600">
            67%
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-6">
          Recent Tasks
        </h2>

        <ul className="space-y-4 text-lg">
          <li>✅ Learn Next.js</li>
          <li>✅ Create Login Page</li>
          <li>⬜ Build Dashboard</li>
          <li>⬜ Complete Internship Project</li>
        </ul>
      </div>
    </div>
  );
}