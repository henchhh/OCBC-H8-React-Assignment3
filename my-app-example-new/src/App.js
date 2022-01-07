import logo from './logo.svg';
import './App.css';
import "bootstrap"; // Import JS
import "bootstrap/dist/css/bootstrap.min.css" // Import CSS
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header logo={ logo }/>
      <Home />
      <Footer />
    </>
  );
}

export default App;
