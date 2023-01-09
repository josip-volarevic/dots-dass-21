import React from 'react'
import { ToolbarProps, Toolbar } from '@mui/material'
import logoImage from 'public/assets/logo.png'
import Image from 'next/image'

const Navigation: React.FC<ToolbarProps> = (props) => {
	return (
		<Toolbar
			component='nav'
			className='navigation'
			sx={{
				padding: {
					xs: '1rem',
					sm: '2rem 2rem 3rem 2rem',
					md: '2rem 3rem',
					lg: '3rem 4rem',
				},
			}}
			{...props}
		>
			<a href='https://dots.mentor-split.hr' rel='noreferrer' target='_blank' className='company-logo-wrapper'>
				<Image className='company-logo' src={logoImage} width={512} height={512} alt='D.O.T.S.' />
			</a>
		</Toolbar>
	)
}

export default Navigation
