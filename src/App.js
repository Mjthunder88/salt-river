import './App.css';
import Header from './components/Header/Header';
import { Container } from '@mui/material';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Container maxWidth='disabled' disableGutters>
      <Header />
      <HomeScreen />
      </Container>
    </div>
  );
}

export default App;
