'use client'
import { assets } from '@/assets/assets'
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CategoriesMarquee from './CategoriesMarquee'

const Hero = () => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

    return (
        <div className='mx-6'>
            <div className='flex max-xl:flex-col gap-6 max-w-7xl mx-auto my-10'>
                <div className='hero-panel relative flex-1 flex flex-col xl:min-h-100 group motion-rise'>
                    <div className='relative z-10 p-5 sm:p-16'>
                        <div className='section-kicker inline-flex items-center gap-3'>
                            <span className='bg-burgundy px-3 py-1 rounded-full text-white text-[10px] tracking-[0.16em]'>THE EDIT</span> Free shipping on considered purchases <ChevronRightIcon className='group-hover:ml-2 transition-all' size={16} />
                        </div>
                        <h2 className='font-display text-4xl sm:text-6xl leading-[1.04] my-5 text-ink max-w-xs sm:max-w-md'>
                            Objects with a point of view.
                        </h2>
                        <div className='text-ink text-sm font-medium mt-4 sm:mt-8'>
                            <p className='text-muted uppercase tracking-[0.16em] text-[10px]'>The collection starts at</p>
                            <p className='text-3xl font-display'>{currency}4.90</p>
                        </div>
                        <button className='button-primary text-sm py-3 px-7 sm:py-4 sm:px-10 mt-5 sm:mt-10 rounded-full'>Explore the edit</button>
                    </div>
                    <Image className='hero-art motion-float sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm' src={assets.hero_model_img} alt="Model wearing colorful headphones" />
                </div>
                <div className='flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-muted'>
                    <div className='heritage-card heritage-card--gold flex-1 flex items-center justify-between w-full p-6 px-8 group motion-rise motion-delay-1'>
                        <div>
                            <p className='font-display text-3xl text-ink max-w-40'>Best products</p>
                            <p className='flex items-center gap-1 mt-4'>View more <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} /> </p>
                        </div>
                        <Image className='w-35' src={assets.hero_product_img1} alt="" />
                    </div>
                    <div className='heritage-card heritage-card--sage flex-1 flex items-center justify-between w-full p-6 px-8 group motion-rise motion-delay-2'>
                        <div>
                            <p className='font-display text-3xl text-ink max-w-40'>20% discounts</p>
                            <p className='flex items-center gap-1 mt-4'>View more <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} /> </p>
                        </div>
                        <Image className='w-35' src={assets.hero_product_img2} alt="" />
                    </div>
                </div>
            </div>
            <CategoriesMarquee />
        </div>

    )
}

export default Hero
