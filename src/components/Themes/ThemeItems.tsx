'use client'

import type { FC } from 'react'

import React, { memo } from 'react'
import ThemeData from '@/components/Themes/ThemeData'

interface ThemeItemsProps {
	onThemeChange: (themeName: string) => void
	currentTheme: string
}

const ThemeItems: FC<ThemeItemsProps> = ({ onThemeChange, currentTheme }) => {
	return (
		<>
			<li className='menu-title font-bold mx-1.5'>亮模式</li>
			{ThemeData.light.map((theme) => (
				<li key={theme.id}>
					<input
						type='radio'
						name='theme-dropdown'
						className='theme-controller w-full btn btn-md btn-block btn-ghost justify-start'
						aria-label={theme.displayName}
						value={theme.name}
						checked={currentTheme === theme.name}
						onChange={() => onThemeChange(theme.name)}
					/>
				</li>
			))}
			<li className='menu-title mt-4 font-bold mx-1.5'>暗模式</li>
			{ThemeData.dark.map((theme) => (
				<li key={theme.id}>
					<input
						type='radio'
						name='theme-dropdown'
						className='theme-controller w-full btn btn-md btn-block btn-ghost justify-start'
						aria-label={theme.displayName}
						value={theme.name}
						checked={currentTheme === theme.name}
						onChange={() => onThemeChange(theme.name)}
					/>
				</li>
			))}
		</>
	)
}

export default memo(ThemeItems)
