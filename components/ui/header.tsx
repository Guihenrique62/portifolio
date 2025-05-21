"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { Menu, X } from "lucide-react"; // ícones para o botão

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Como Funciona", href: "#workflows" },
    { label: "Recursos", href: "#features" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Comece Agora", href: "#cta" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Logo */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop nav */}
          <ul className="hidden sm:flex flex-1 items-center justify-end gap-6 text-sm text-gray-300">
            {links.map((item) => (
              <li key={item.href} className="relative group">
                <a
                  href={item.href}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="sm:hidden text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm sm:hidden">
          <div className="fixed right-0 top-0 h-full w-64 bg-gray-900 p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <span className="text-white font-semibold text-lg">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <ul className="space-y-4 text-gray-300">
              {links.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)} // fecha o menu ao clicar
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}