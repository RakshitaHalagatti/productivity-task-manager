import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h1 className="text-3xl font-bold text-center mb-2">
          Productivity App
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Manage your tasks efficiently
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-4"
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
          Login
        </button>

        <p className="text-center mt-4 text-sm">
          <Link href="/signup" className="text-blue-600">
            Don't have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}