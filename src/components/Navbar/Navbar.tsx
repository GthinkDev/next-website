'use client'

import type { FC } from 'react'

import React, { memo } from 'react'
import NavData from '@/components/Navbar/NavData'
import NavItem from '@/components/Navbar/NavItem'

const Navbar: FC = () => {
	const items = NavData
	return (
		<ul className={' gap-6 items-center h-full  hidden lg:flex'}>
			{items.map((item, index) => (
				<NavItem key={index} href={item.href} name={item.name} />
			))}
		</ul>
	)
}

export default memo(Navbar)
