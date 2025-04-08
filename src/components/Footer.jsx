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
            {/* Social media links here */}
            {/* ... Facebook, Twitter, Instagram SVGs as-is */}
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
