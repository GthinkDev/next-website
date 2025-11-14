'use client'

import type { FC } from 'react'

import React, { memo, useState } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import MobileNav from '@/components/Navbar/MobileNav'
import ThemeModal from '@/components/Themes/ThemeModal'
import { Logo } from '@/components/icons'
import Link from 'next/link'

const Header: FC = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	return (
		<>
			<header
				className={
					'flex gap-10 sticky top-0 justify-between items-center h-16 min-h-16 bg-base-100/90 backdrop-blur-2xl px-3 z-50 w-full mediaGlobal'
				}
			>
				<Link className='flex justify-start gap-2 text-base-content items-center ' href='/'>
					<Logo />
					<p className='font-black text-lg hidden md:block'>百分之三科技</p>
				</Link>
				<div className={'flex-1 h-full hidden lg:block'}>
					<Navbar />
				</div>
				<div className='flex gap-2 items-center'>
					<ThemeModal />
					{/* 汉堡菜单图标 - 仅在小屏幕显示 */}
					<button className='lg:hidden btn btn-ghost btn-square' onClick={toggleMobileMenu}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							className='inline-block w-6 h-6 stroke-current'
						>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
						</svg>
					</button>
				</div>
			</header>

			{/* 移动端导航弹层 */}
			{isMobileMenuOpen && (
				<div className='fixed inset-x-0 top-0 bottom-0 z-50 lg:hidden bg-base-100 overflow-y-auto'>
					<div className='flex justify-between items-center p-4 border-b border-base-300'>
						<p className='font-black text-lg'>百分之三科技</p>
						<button className='btn btn-ghost btn-square' onClick={toggleMobileMenu}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								className='inline-block w-6 h-6 stroke-current'
							>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
							</svg>
						</button>
					</div>
					{/* 导航项列表 */}
					<div className='py-20 flex flex-col h-full gap-8  items-center'>
						<MobileNav toggleMobileMenu={toggleMobileMenu} />
					</div>
				</div>
			)}
		</>
	)
}

export default memo(Header)
