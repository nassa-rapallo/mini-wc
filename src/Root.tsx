import Router from 'Router'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from 'app/theme'

const Root = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<Router />
		</ThemeProvider>
	)
}

export default Root
