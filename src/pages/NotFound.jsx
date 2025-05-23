import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="mb-6">Halaman tidak ditemukan.</p>
      <Link to="/" className="text-blue-400 hover:underline">Kembali ke Home</Link>
    </div>
  )
}
