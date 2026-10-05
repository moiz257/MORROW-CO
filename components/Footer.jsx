import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { brand } from "@/lib/brand";

const Footer = () => {
    const linkSections = [
        {
            title: "PRODUCTS",
            links: [
                { text: "Earphones", path: "/" },
                { text: "Headphones", path: "/" },
                { text: "Smartphones", path: "/" },
                { text: "Laptops", path: "/" },
            ],
        },
        {
            title: "DISCOVER",
            links: [
                { text: "Home", path: "/" },
                { text: "Privacy Policy", path: "/" },
                { text: "Become Plus Member", path: "/pricing" },
                { text: "Create Your Store", path: "/create-store" },
            ],
        },
    ];

    const socialIcons = [
        { icon: Facebook, link: "https://www.facebook.com" },
        { icon: Instagram, link: "https://www.instagram.com" },
        { icon: Twitter, link: "https://twitter.com" },
        { icon: Linkedin, link: "https://www.linkedin.com" },
    ];

    return (
        <footer className="mx-6 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-14 border-b border-line text-muted">
                    <div>
                        <Link href="/" className="brand-mark" aria-label={brand.name}>
                            <span>{brand.shortName}</span><span className="brand-accent"> &amp; Co.</span>
                        </Link>
                        <p className="max-w-[410px] mt-7 text-sm leading-6">Welcome to {brand.name}, a considered edit of useful technology and everyday objects — selected for how they work and how they live with you.</p>
                        <div className="flex items-center gap-3 mt-5">
                            {socialIcons.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <Link href={item.link} key={i} className="flex items-center justify-center w-10 h-10 bg-white hover:scale-105 hover:border border-line transition rounded-full">
                                        <Icon size={17} strokeWidth={1.5} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-8 text-sm">
                        {linkSections.map((section, index) => (
                            <div key={index}>
                                <h3 className="font-medium text-ink md:mb-5 mb-3 tracking-[0.16em] text-xs">{section.title}</h3>
                                <ul className="space-y-2.5">
                                    {section.links.map((link, i) => (
                                        <li key={i}>
                                            <Link href={link.path} className="hover:text-burgundy transition-colors">{link.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div>
                            <h3 className="font-medium text-ink md:mb-5 mb-3 tracking-[0.16em] text-xs">CONTACT</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2"><Phone size={15} /> +1-212-456-7890</li>
                                <li className="flex items-center gap-2"><Mail size={15} /> contact@example.com</li>
                                <li className="flex items-center gap-2"><MapPin size={15} /> 794 Francisco, 94102</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="py-4 text-sm text-muted">Copyright 2026 © {brand.name} All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
