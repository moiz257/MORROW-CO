'use client'
import Link from "next/link"
import { brand } from "@/lib/brand"

const StoreNavbar = () => {


    return (
        <div className="dashboard-topbar flex items-center justify-between px-6 sm:px-12 py-5 transition-all">
            <Link href="/" className="brand-mark" aria-label={brand.name}>
                <span>{brand.shortName}</span><span className="brand-accent"> &amp; Co.</span>
                <span className="brand-badge absolute -top-3 -right-14 px-2.5 py-1 rounded-full">
                    Store
                </span>
            </Link>
            <div className="flex items-center gap-3">
                <p>Hi, Seller</p>
            </div>
        </div>
    )
}

export default StoreNavbar
