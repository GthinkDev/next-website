'use client'

import Link from 'next/link'
import { memo, type FC, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import styles from './MallStatus.module.css'

const data = [
	{
		title: '移动电商推广系统',
		content: '增长利器在手，玩转全域推广',
		description: '经典推广模式，组合推广玩法，灵活推广管理，构建强大推广体系，助力业绩倍增',
		image: '/images/ecommerce-1.png',
	},
	{
		title: '社群营销系统',
		content: '私域流量运营，提升用户粘性',
		description: '社群分层运营，精准营销触达，构建高粘性用户社群，实现持续复购增长',
		image: '/images/community-1.png',
	},
	{
		title: '会员积分系统',
		content: '会员权益升级，提升忠诚度',
		description: '多级会员体系，积分兑换商城，会员专属权益，打造高价值会员生态',
		image: '/images/member-1.jpg',
	},
	{
		title: '直播带货系统',
		content: '实时互动营销，引爆销售转化',
		description: '高清直播体验，实时互动功能，多样化营销工具，实现直播销售快速增长',
		image: '/images/live-1.jpg',
	},
	{
		title: '数据分析系统',
		content: '智能数据洞察，驱动决策优化',
		description: '全方位数据监控，可视化报表呈现，智能分析预测，助力精准营销决策',
		image: '/images/data-1.jpg',
	},
	{
		title: '多渠道管理系统',
		content: '全渠道整合，一体化运营',
		description: '线上线下融合，多平台数据同步，统一库存管理，实现全渠道无缝购物体验',
		image: '/images/channel-1.jpg',
	},
]

interface MallStatusItemsProps {
	title: string
	content: string
	description: string
	image?: string
}
export const MallStatusItems: FC<MallStatusItemsProps> = (props) => {
	const { title, content, description, image } = props
	const bgRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (bgRef.current && image) {
			bgRef.current.style.backgroundImage = `url(${image})`
		}
	}, [image])

	return (
		<Link href={'/'} className='hover-3d cursor-pointer aspect-square w-full rounded-box '>
			{/* content */}
			<div
				ref={bgRef}
				className={`hover-3d w-full h-full bg-cover bg-center bg-no-repeat bg-base-100 cursor-pointer p-16 hover:shadow-xl hover:shadow-base-300 relative overflow-hidden ${
					image ? styles.bgImage : ''
				}`}
			>
				{/* content */}
				<div className='flex flex-col gap-4 w-full items-center  p-6 rounded-lg'>
					<p className='text-base text-neutral-content'>{content}</p>
					<h1 className='font-medium md:text-3xl '>{title}</h1>
					<p className='text-bold font-lg text-center'>{description}</p>
				</div>

				{/* 8 empty divs needed for the 3D effect */}
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</Link>
	)
}

const MallStatus: FC = () => {
	const items = data
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, amount: 0.1, margin: '-100px' })

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 150 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
			transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
			className={'flex flex-col items-center gap-6 py-4 min-h-screen'}
		>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : { opacity: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				className={'text-base md:text-4xl font-black py-4 '}
			>
				专注移动电商营销 打造全域一体综合经营
			</motion.h1>
			<div className='w-full grid md:grid-cols-2 gap-6 aspect-square'>
				{items.map((item, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 80 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
						transition={{
							duration: 0.6,
							delay: 0.1 * index,
							ease: [0.25, 0.46, 0.45, 0.94],
						}}
					>
						<MallStatusItems
							title={item.title}
							content={item.content}
							description={item.description}
							image={item.image}
						/>
					</motion.div>
				))}
			</div>
		</motion.div>
	)
}

export default memo(MallStatus)
