'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Title = ({ title, description, visibleButton = true, href = '' }) => {

    return (
        <div className='flex flex-col items-center text-center'>
            <span className='section-kicker'>The collection</span>
            <h2 className='section-title mt-2'>{title}</h2>
            <Link href={href} className='flex items-center gap-5 text-sm text-muted mt-3'>
                <p className='max-w-lg'>{description}</p>
                {visibleButton && <button className='text-burgundy flex items-center gap-1 whitespace-nowrap'>View more <ArrowRight size={14} /></button>}
            </Link>
        </div>
    )
}

export default Title
