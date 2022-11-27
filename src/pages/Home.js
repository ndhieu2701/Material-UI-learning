import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import TourCard from "../components/TourCard";
import cities from "../data.json";

const Home = () => {
  return (
    <Container
      sx={{
        marginY: 5,
      }}
    >
      {cities.map((city, index) => (
        <React.Fragment key={index}>
          <Typography variant="h4" component="h2" mt={5} mb={3}>
            Top {city.name} tours
          </Typography>
          <Grid container spacing={5}>
            {city.tours.map((tour, index) => (
              <TourCard key={index} city={city} tour={tour} />
            ))}
          </Grid>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Home;
