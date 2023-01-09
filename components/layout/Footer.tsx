import React from 'react'
import { Box, BoxProps, Typography } from '@mui/material'
import LogoIcon from 'public/assets/logo.svg'

const Footer: React.FC<BoxProps> = (props) => {
	return (
		<Box component='footer' className='footer' {...props}>
			<Box className='footer-copyright'>
				<LogoIcon className='company-logo' />
				<Typography variant='body2'>Copyright &copy; D.O.T.S. {new Date().getFullYear()}.</Typography>
			</Box>
		</Box>
	)
}

export default Footer
