import Link from "next/link";

export default function Dashboard() {
  return (
    <div
  className="min-h-screen bg-cover bg-center p-8"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72')",
  }}
>

      {/* Navigation Bar */}
      <nav className="bg-white rounded-xl shadow-lg p-4 mb-8 flex justify-center gap-6">
        <Link
          href="/dashboard"
          className="font-semibold text-blue-600"
        >
          Dashboard
        </Link>

  <Link
  href="/tasks"
  className="font-semibold text-gray-700 hover:text-purple-600 transition"
>
  Manage Tasks
</Link>
        <Link
          href="/"
          className="font-semibold text-red-600"
        >
          Logout
        </Link>
      </nav>

      {/* Heading */}
      <div className="bg-white/20 backdrop-blur-md rounded-3xl p-10 mb-8 text-center">
  <h1 className="text-6xl font-bold text-white mb-4">
    Productivity Dashboard 🚀
  </h1>

  <p className="text-xl text-white">
    Organize your tasks and boost productivity
  </p>
</div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl text-center hover:scale-105 transition">
          <h2 className="text-xl font-semibold">
            Total Tasks
          </h2>
          <p className="text-5xl mt-4 font-bold">
            0
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">
            Completed
          </h2>
          <p className="text-5xl mt-4 font-bold text-green-600">
            0
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">
            Pending
          </h2>
          <p className="text-5xl mt-4 font-bold text-red-600">
            0
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">
            Progress
          </h2>
          <p className="text-5xl mt-4 font-bold text-blue-600">
            0%
          </p>
        </div>

      </div>

      {/* Recent Tasks */}
      <div className="bg-white p-6 rounded-xl shadow">
       <h2 className="text-3xl font-bold mb-6">
  Recent Tasks
</h2>

<p className="text-gray-500">
  No tasks available yet.
</p>
      </div>

    </div>
  );
}