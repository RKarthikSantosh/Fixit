// Footer.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="p-16 bg-gray-900 text-center border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">
        <div className="flex flex-col items-center md:items-start">
          <div className="p-3">
            <Image src="/engineer.png" alt="FixIt Logo" width={70} height={70} />
          </div>
          <h3 className="text-2xl font-bold text-white mt-6 tracking-wider">FIXIT</h3>
          <p className="text-base text-gray-400 mt-3">India's #1 Service Booking Platform</p>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <Link href="/Aboutus" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center">
              <span className="mr-2">•</span> About Us
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center">
              <span className="mr-2">•</span> Contact Us
            </Link>
            <Link href="/faq" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center">
              <span className="mr-2">•</span> FAQs
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center">
              <span className="mr-2">•</span> Terms & Policies
            </Link>
            <Link href="/careers" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center">
              <span className="mr-2">•</span> Careers
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center">
              <span className="mr-2">•</span> Blog
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-xl font-bold text-white mb-6">Connect With Us</h4>
          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300 bg-gray-800 p-3 rounded-full hover:bg-gray-700"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 bg-gray-800 p-3 rounded-full hover:bg-gray-700"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-300 bg-gray-800 p-3 rounded-full hover:bg-gray-700"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 text-sm">
        <p>© 2025 FixIt.</p>
        <p className="mt-2">Available in major cities worldwide | Mumbai • Delhi • Bangalore • Hyderabad • Chennai</p>
      </div>
    </footer>
  );
}
