import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "News App",
  description: "Latest news articles and updates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-600 hover:text-blue-800"
            >
              News App
            </Link>
            <nav>
              <Link href="/" className="text-gray-600 hover:text-gray-800 mx-4">
                Home
              </Link>
              <Link href="/search" className="text-gray-600 hover:text-gray-800 mx-4">
                Search
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-800 mx-4"
              >
                About
              </Link>
            </nav>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>

        <footer className="bg-white shadow mt-8">
          <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
            &copy; {new Date().getFullYear()} News App. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
