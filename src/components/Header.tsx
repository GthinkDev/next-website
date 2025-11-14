'use client'

import type { FC } from 'react'

import React, { memo } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import ThemeModal from '@/components/Themes/ThemeModal'
import { Logo } from '@/components/icons'
import Link from 'next/link'

const Header: FC = () => {
	return (
		<header
			className={
				'flex gap-10 sticky top-0 items-center h-16 min-h-16 bg-base-100/90 backdrop-blur-2xl px-3 z-50 w-full mediaGlobal'
			}
		>
			<Link className='flex justify-start gap-2 text-base-content items-center ' href='/'>
				<Logo />
				<p className='font-black text-lg hidden md:block'>百分之三科技</p>
			</Link>
			<div className={'flex-1 h-full'}>
				<Navbar />
			</div>
			<div>
				<ThemeModal />
			</div>
		</header>
	)
}

export default memo(Header)
