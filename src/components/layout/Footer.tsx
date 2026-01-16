import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-900 text-zinc-400 py-20 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {/* Brand & Mission */}
                <div className="space-y-6 lg:col-span-1">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white p-1">
                            <Image
                                src="/logo.png"
                                alt="Mkhonjana Foundation Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-bold text-lg tracking-tight text-white">
                            Mkhonjana Foundation
                        </span>
                    </Link>
                    <p className="text-sm leading-relaxed max-w-xs">
                        Built on community. Guided by integrity. Rural-rooted, community-led development with dignity in the Mkhonjana Village.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-6">
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest">Explore</h4>
                    <nav className="flex flex-col gap-4 text-sm font-medium">
                        <Link href="/about" className="hover:text-brand transition-colors">About Us</Link>
                        <Link href="/our-work" className="hover:text-brand transition-colors">Our Work</Link>
                        <Link href="/news" className="hover:text-brand transition-colors">News & Updates</Link>
                        <Link href="/contact" className="hover:text-brand transition-colors">Contact</Link>
                        <Link href="/get-involved" className="hover:text-brand transition-colors">Get Involved</Link>
                    </nav>
                </div>

                {/* Resources & Tags */}
                <div className="space-y-6">
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest">Our Focus</h4>
                    <div className="flex flex-wrap gap-2">
                        {['Sports', 'Safety', 'Arts', 'Skills', 'Partnerships'].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold border border-white/10 text-white">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="pt-4 space-y-2">
                        <p className="text-xs">Physical Community Location:</p>
                        <p className="text-sm text-white font-medium">Mkhonjana Village, Enoch Mgijima Manucipality, Eastern Cape</p>
                    </div>
                </div>

                {/* CTA & Copyright */}
                <div className="space-y-8 lg:text-right flex flex-col items-start lg:items-end">
                    <div className="space-y-4 w-full">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">Support Us</h4>
                        <Link
                            href="/donate"
                            className="inline-block px-8 py-4 bg-brand text-white rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg shadow-brand/20 w-fit"
                        >
                            Donate to Our Work
                        </Link>
                    </div>
                    <div className="pt-8 border-t border-white/5 w-full">
                        <p className="text-xs">
                            © {currentYear} Mkhonjana Foundation. <br className="sm:hidden" /> All rights reserved. Registered NGO.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
