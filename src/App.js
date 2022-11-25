import { Container, Grid } from '@mui/material';
import './App.css';
import TourCard from './components/TourCard';

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container spacing={2}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
