'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function MobileNav({ links }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden ml-auto">
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Menü"
        className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors">
        <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`}/>
        <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}/>
        <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`}/>
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50 py-4 px-6 flex flex-col gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="py-3 text-sm font-medium text-gray-700 hover:text-[#E85D04] border-b border-gray-50 last:border-0 transition-colors">
              {l.label}
            </a>
          ))}
          <Link href="/isletme" onClick={() => setOpen(false)}
            className="mt-3 py-3 text-center text-sm font-semibold text-white bg-[#E85D04] rounded-lg hover:bg-[#C44D00] transition-colors">
            Giriş Yap
          </Link>
        </div>
      )}
    </div>
  );
}
