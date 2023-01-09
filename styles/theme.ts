import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import variables from 'styles/variables/theme.module.scss'

const spacing = parseInt(variables.spacing || '8')

const pxToInt = (pxString: string) => (pxString ? parseInt(pxString.replace('px', ''), 10) : 0)
// const intToSpacing = (int?: number) => (int !== null && int !== undefined ? `${int * spacing}px` : '')
// const getSpacing = (x: number, y?: number, z?: number, q?: number) => {
// 	return `${intToSpacing(x)} ${intToSpacing(y)} ${intToSpacing(z)} ${intToSpacing(q)}`
// }

const defaultTheme = createTheme({
	spacing,
	palette: {
		background: { default: variables.primaryColor },
		primary: { main: variables.primaryColor },
		secondary: { main: variables.secondaryColor },
		text: { primary: variables.textColor },
	},
	breakpoints: {
		values: {
			xs: pxToInt(variables.xsWidth),
			sm: pxToInt(variables.smWidth),
			md: pxToInt(variables.mdWidth),
			lg: pxToInt(variables.lgWidth),
			xl: pxToInt(variables.xlWidth),
		},
	},
	typography: {
		fontSize: 16,
		fontFamily: '"Cabin Condensed", sans-serif',
		// body1: { fontWeight: 500 },
		// body2: { fontWeight: 500, fontFamily: 'Archivo Narrow' },
		h1: { fontWeight: 'bold' },
		h2: { fontWeight: 'bold' },
	},
	components: {
		MuiIconButton: {
			styleOverrides: {
				root: {
					borderRadius: '6px',
				},
			},
		},
	},
})

export default responsiveFontSizes(defaultTheme, { factor: 1.2 })
