// Import Styles
import './styles/App.Styles.css';

// Import Components
import HeaderNavbar from '../HeaderNavbar/index'
import Header from '../Header/index';
import Footer from '../Footer/index'
import FooterNavbar from '../FooterNavbar/index';
import Hero from '../Hero/index'
import GlobalStyle from '../../styles/GlobalStyle';

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<h1>Simple Flying App</h1>
			<HeaderNavbar />
			<Header />
			<Footer />
			<FooterNavbar />
			<Hero />
		</div>
	);
}

export default App;
