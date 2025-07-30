'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

export default function Header() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Sobre nós', href: '/sobre' },
        { label: 'Turmas', href: '/turmas' },
        { label: 'Eventos', href: '/eventos' },
        { label: 'Contato', href: '/contato' },
    ]

    return (
        <header className="w-full px-6 py-4 bg-[#3A222F] shadow-md relative">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/caju-logo.svg"
                        alt="Logo Caju"
                        width={120}
                        height={40}
                        className="cursor-pointer"
                    />
                </Link>

                {/* Botão hambúrguer mobile */}
                <button
                    className="lg:hidden text-white text-2xl"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    ☰
                </button>

                {/* Navegação desktop */}
                <nav className="hidden lg:flex gap-4 lg:gap-6 items-center text-[1.125rem]">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`border-b-2 transition-colors ${isActive
                                        ? 'text-[#A24154] border-[#A24154]'
                                        : 'text-[#FFC945] border-transparent hover:text-[#A24154]'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                {/* Botão WhatsApp sempre visível */}
                <a
                    href="https://wa.me/5553981663998"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:flex items-center gap-2 bg-[#DA8331] hover:bg-[#A24154] transition-colors text-white w-full max-w-[200px] px-4 py-2 rounded-md"
                >
                    <FaWhatsapp className="w-5 h-5 text-white" />
                    <span>Entre em contato</span>
                </a>
            </div>

            {/* Menu mobile */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-[#3A222F] px-6 py-4 absolute top-full left-0 w-full z-50">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block py-2 border-b transition-colors ${isActive
                                        ? 'text-[#A24154] border-[#A24154]'
                                        : 'text-[#FFC945] border-transparent hover:text-[#A24154]'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                    
                    <a
                        href="https://wa.me/5553981663998"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex mt-2 items-center justify-center gap-2 bg-[#DA8331] hover:bg-[#A24154] transition-colors text-white px-4 py-2 rounded-md"
                    >
                        <FaWhatsapp className="w-5 h-5 text-white" />
                        <span>Entre em contato</span>
                    </a>
                </div>
            )}
        </header>
    )
}
