'use client'

import type { FC } from 'react'

import { memo } from 'react'
import Hero from '@/components/Home/Hero'
import MallStatus from '@/components/Home/MallStatus'

const Page: FC = () => {
	return (
		<section className={'min-h-full px-3 md:px-20 2xl:px-80 '}>
			<Hero />
			<MallStatus />
		</section>
	)
}
export default memo(Page)
