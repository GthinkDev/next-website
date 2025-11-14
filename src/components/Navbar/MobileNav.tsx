'use client'

import type { FC } from 'react'

import React, { memo } from 'react'
import NavData from '@/components/Navbar/NavData'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface IProps {
	toggleMobileMenu: () => void
}

const MobileNav: FC<IProps> = ({ toggleMobileMenu }) => {
	const pathname = usePathname()

	const handleNavClick = () => {
		toggleMobileMenu()
	}

	return (
		<ul className={'gap-2 flex flex-col w-1/4'}>
			{NavData.map((item, index) => (
				<li key={index}>
					<Link
						href={item.href}
						onClick={handleNavClick}
						className={`block py-3 px-4 rounded-lg transition-colors text-center ${
							item.href === pathname
								? 'bg-primary text-primary-content font-medium'
								: 'hover:bg-base-200 text-base-content'
						}`}
					>
						{item.name}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default memo(MobileNav)
