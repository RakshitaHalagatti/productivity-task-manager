import Link from "next/link";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Join Productivity App
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg mb-4"
        />

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

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 border rounded-lg mb-4"
        />

        <Link href="/dashboard">
          <button className="w-full bg-green-600 text-white p-3 rounded-lg">
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
}