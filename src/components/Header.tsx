'use client'

import type { FC } from 'react'

import React, { memo, useState } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import MobileNav from '@/components/Navbar/MobileNav'
import ThemeModal from '@/components/Themes/ThemeModal'
import { Logo } from '@/components/icons'
import Link from 'next/link'
import { div } from 'framer-motion/client'
import { Menu, X } from 'lucide-react'

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
				<div className='flex gap-4 items-center'>
					<ThemeModal />
					{/* 汉堡菜单图标 - 仅在小屏幕显示 */}
					<button
						className='lg:hidden btn btn-ghost btn-square'
						onClick={toggleMobileMenu}
						title={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
						aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
					>
						{/* <svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							className={`inline-block w-6 h-6 stroke-current transition-all duration-300 ease-in-out ${
								isMobileMenuOpen ? 'rotate-90' : ''
							}`}
						>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
						</svg> */}
						<Menu className='text-base-content' strokeWidth={2.25} />
					</button>
				</div>
			</header>

			{/* 移动端导航弹层 */}
			<div
				className={`fixed right-0 top-0 bottom-0 w-full z-50 lg:hidden bg-base-100 overflow-y-auto transition-all duration-300 ease-in-out transform shadow-xl ${
					isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
				}`}
			>
				<div className='flex justify-between items-center p-4 h-16 border-b border-base-300'>
					<Link className='flex justify-start gap-2 text-base-content items-center ' href='/'>
						<Logo />
						<p className='font-black text-lg hidden md:block'>百分之三科技</p>
					</Link>
					<button
						className='btn btn-ghost btn-square'
						onClick={toggleMobileMenu}
						title='关闭菜单'
						aria-label='关闭菜单'
					>
						<X
							className={`inline-block w-6 h-6 text-base-content stroke-current transition-all duration-300 ease-in-out ${
								isMobileMenuOpen ? 'rotate-90' : ''
							}`}
						/>
					</button>
				</div>
				{/* 导航项列表 */}
				<div className='py-20 flex flex-col h-full gap-8  items-center'>
					<MobileNav toggleMobileMenu={toggleMobileMenu} />
				</div>
			</div>
		</>
	)
}

export default memo(Header)
