import React from 'react';
import SideNav from './components/side-nav';
// import theme from "./theme";
import {ThemeProvider} from 'styled-components';

const theme = {
	colors: {
		text: '#1d1e18',
		background: '#A26691',
		primary: '#704e93',
		secondary: '#767676',
		accent: '#d396c3',
		muted: '#efefef',
	},
	space: [
		0,
		'0.125rem', // 2px
		'0.25rem', // 4px
		'0.5rem', // 8px
		'1rem', // 16px
		'2rem', // 32px
		'4rem', // 64px
		'8rem', // 128px
		'16rem', // 256px
	],
	fontSizes: {
		xl: '4rem',
		l: '2rem',
		m: '1rem',
		s: '0.9rem',
		xs: '0.75rem',
	}
};

const Layout = ({children}) => {
    return(
           <ThemeProvider theme={theme}>
            <div className="container" style={{border: "1px solid red"}}>
            <SideNav/>
            <main style={{marginLeft: "150px"}}> {children} </main>
           </div>
           </ThemeProvider>
    )
}

export default Layout;