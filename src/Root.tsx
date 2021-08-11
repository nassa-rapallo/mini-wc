import Router from 'Router'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from 'app/theme'

import GlobalStyles from 'components/GlobalStyles'

const Root = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Router />
		</ThemeProvider>
	)
}

export default Root
