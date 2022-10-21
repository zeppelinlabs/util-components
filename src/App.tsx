import React from 'react';
import { GlobalStyled } from '../src/styles/globalStyled'
import { ResetStyled } from './styles/resetStyled';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/defaultTheme';

import Showcase from './Showcase';

const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<ResetStyled />
			<GlobalStyled />

			<Showcase />

		</ThemeProvider>
	);
}

export default App;
