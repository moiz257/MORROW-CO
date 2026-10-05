'use client'
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { brand } from "@/lib/brand";

const Navbar = () => {

    const router = useRouter();

    const [search, setSearch] = useState('')
    const cartCount = useSelector(state => state.cart.total)

    const handleSearch = (e) => {
        e.preventDefault()
        router.push(`/shop?search=${search}`)
    }

    return (
        <nav className="relative bg-white">
            <div className="mx-6">
                <div className="flex items-center justify-between max-w-7xl mx-auto py-5 transition-all">

                    <Link href="/" className="brand-mark" aria-label={brand.name}>
                        <span>{brand.shortName}</span><span className="brand-accent"> &amp; Co.</span>
                        <span className="brand-tagline">{brand.tagline}</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-sm">
                        <Link className="nav-link" href="/">Home</Link>
                        <Link className="nav-link" href="/shop">Shop</Link>
                        <Link className="nav-link" href="/">About</Link>
                        <Link className="nav-link" href="/">Contact</Link>

                        <form onSubmit={handleSearch} className="search-field hidden xl:flex items-center w-xs gap-2 px-4 py-2.5 rounded-full">
                            <Search size={17} className="text-muted" />
                            <input className="w-full bg-transparent outline-none placeholder:text-muted" type="text" placeholder="Search the collection" value={search} onChange={(e) => setSearch(e.target.value)} required />
                        </form>

                        <Link href="/cart" className="relative flex items-center gap-2 text-muted hover:text-burgundy transition-colors">
                            <ShoppingCart size={18} />
                            Cart
                            <span className="absolute -top-2 left-3 text-[9px] text-white bg-burgundy size-4 rounded-full flex items-center justify-center">{cartCount}</span>
                        </Link>

                        <button className="button-primary px-7 py-2.5 rounded-full">
                            Login
                        </button>

                    </div>

                    {/* Mobile User Button  */}
                    <div className="sm:hidden">
                        <button className="button-primary px-6 py-2 text-sm rounded-full">
                            Login
                        </button>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300" />
        </nav>
    )
}

export default Navbar
