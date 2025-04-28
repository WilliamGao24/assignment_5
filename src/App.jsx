import './App.css';
import Featured from './components/Featured.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';

function App() {
    return (
        <div className="App">
            <div className="header">
                <div className="title">NXTFLIX</div>
                <Header />
            </div>
            <Hero />
            <div className="featured-section">
                <Featured />
            </div>
            <Footer />
        </div>
    );
}

export default App;