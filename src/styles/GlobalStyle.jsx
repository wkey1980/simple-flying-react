// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		outline: 1px solid red;
	}

	html {
		font-size: 100%;
		box-sizing: border-box;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
		margin: 0;
		padding: 0;
	}

	li,
	li a {
		text-decoration: none;
		list-style: none;
	}

	a,
	a:visited,
	a:hover {
		text-decoration: none;
	}

	img {
		max-width: 100%;
		height: auto;
		display: block;
	}

`;

export default GlobalStyle;