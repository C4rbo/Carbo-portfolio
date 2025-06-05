// components/Navbar.js
import Link from 'next/link';
import { navbar } from './data';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between text-white px-6 py-4">
      <div className="text-2xl font-bold mr-300">
        <Link href="/" className="hover:text-gray-300 transition-colors">
          Carbo
        </Link>
      </div>
      
      <div className="flex gap-8">
        {navbar.map((link) => (
          <Link 
            key={link.id} 
            href={link.url}
            className="hover:text-gray-300 transition-colors text-lg"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  );
}