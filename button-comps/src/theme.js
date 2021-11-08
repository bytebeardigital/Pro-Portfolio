import './assets/styles/sass/_variables.scss';

const theme = {
	colors: {
		text: '#1d1e18',
		background: '#A26691',
		primary: '#704e93',
		secondary: '#767676',
		accent: '#d396c3',
        white: '#ffffff',
		muted: '#efefef',
        transparent: 'transparent',
        none: 'none'
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
    border: {
		none: 'none',
		thin: '1px solid',
	},
	fontSizes: {
		xl: '4rem',
		l: '2rem',
		m: '1rem',
		s: '0.9rem',
		xs: '0.75rem',
	},
};

export default theme;