import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-[url('/your-background.jpg')] bg-cover bg-center blur-sm"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-black bg-opacity-50 backdrop-blur-sm">
        <h1 className="text-2xl font-bold">Cloudyy Portofolio</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/identitas" className="hover:text-blue-400">Identitas</Link>
          <Link to="/pendidikan" className="hover:text-blue-400">Pendidikan</Link>
          <Link to="/pengalaman" className="hover:text-blue-400">Pengalaman</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h2 className="text-5xl font-bold mb-6 animate-fade-in">Halo, saya Cloudyy 👋</h2>
        <p className="text-xl text-gray-300 max-w-xl animate-fade-in-delay-1">
          Seorang web developer yang berfokus membangun pengalaman pengguna modern dengan React & Tailwind.
        </p>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-400 border-t border-gray-700">
        © 2025 Cloudyy. Dibuat dengan ❤️ menggunakan React + Tailwind CSS.
      </footer>
    </div>
  )
}
