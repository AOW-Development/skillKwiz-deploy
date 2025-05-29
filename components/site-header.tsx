"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <nav className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-1 min-h-[64px]">
          {/* Logo and Branding */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="SkillKwiz Logo"
              width={80}
              height={80}
              className="object-contain"
              priority
            />

            <div className="leading-tight">
              <div
                className="text-[28px] font-bold text-[#69226F]"
                style={{ fontFamily: "Aardvark Cafe" }}
              >
                SkillKwiz
              </div>
              <div
                className="text-[16px] text-black mt-[-2px]"
                style={{ fontFamily: "GardensC" }}
              >
                How much do you know?
              </div>
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white z-20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/blog", label: "Blog" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative group py-1 px-2 transition-all ${
                  pathname === href
                    ? "text-yellow-400 font-semibold"
                    : "text-black"
                }`}
              >
                <span>{label}</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center py-3 bg-[#2f5f96] rounded-b-3xl transition-all duration-300 ease-in-out">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/blog", label: "Blog" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative group py-2 text-lg w-full text-center ${
                  pathname === href
                    ? "text-yellow-400 font-semibold"
                    : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{label}</span>
                <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
