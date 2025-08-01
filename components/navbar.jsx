"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center">
      <nav className="w-[50%] bg-black bg-opacity-90 shadow-[0_0_20px_rgba(6,182,212,0.8)] text-gray-500 px-4 rounded-4xl mx-4 mt-8">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center space-x-4">
            <img src="/logo.png" className="w-14 h-14" alt="LootKart Logo" />
            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">LootKart</span>
          </Link>
          <div className="hidden w-full md:block md:w-auto md:ml-auto">
            <ul className="font-medium flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
              {[
                { label: "Home", path: "/" },
                { label: "Category", path: "/category" },
                { label: "About", path: "/about" },
              ].map(({ label, path }) => (
                <li key={label}>
                  <Link
                    href={path}
                    className={`block py-2 px-3 rounded md:p-0 ${
                    pathname === path
  ? " text-cyan-200 px-6 py-3 rounded-full"
  : "text-gray-600 hover:text-white"

 }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
