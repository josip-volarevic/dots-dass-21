import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from 'styles/theme'
import Head from 'next/head'
import 'styles/app.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<Head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
				/>
				<title>Dass 21</title>
			</Head>

			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
