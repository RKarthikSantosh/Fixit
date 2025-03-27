// Footer.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="p-12 bg-gray-900/90 text-center border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center md:items-start">
          <Image src="/engineer.png" alt="FixIt Logo" width={60} height={60} />
          <h3 className="text-xl font-semibold text-white mt-4">FIXIT</h3>
          <p className="text-sm text-gray-400 mt-2">India's #1 Service Booking Platform</p>
        </div>
        
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/Aboutus" className="text-gray-400 hover:text-white transition-colors duration-300">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
              Contact Us
            </Link>
            <Link href="/faq" className="text-gray-400 hover:text-white transition-colors duration-300">
              FAQs
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms & Policies
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <p className="text-gray-400 mt-8 text-sm">Available in major cities worldwide</p>
    </footer>
  );
}