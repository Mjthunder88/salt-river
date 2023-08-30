import './App.css';
import Header from './components/Header/Header';
import { Container } from '@mui/material';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer/Footer';
import "./components/UI/stylesheet.css"

function App() {
  return (
    <div className="App">
      <Container maxWidth='disabled' disableGutters>
      <Header />
      <HomeScreen />
      <Footer />
      </Container>
    </div>
  );
}

export default App;
