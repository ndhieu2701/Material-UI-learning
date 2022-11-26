import { AccessTime } from "@mui/icons-material";
import {
  Box,
  Grid,
  Rating,
  Typography,
  createTheme,
  ThemeProvider,
  Card,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard = ({ tour, city }) => {
  const cityName = city.name.split(" ").join("-")
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${cityName}/${tour.id}`);
  };

  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Card elevation={3}>
          <CardActionArea onClick={handleClick}>
            <CardMedia
              component="img"
              image={tour.image}
              alt="img src"
              className="img"
            />
            <Box paddingX={1}>
              <Typography variant="subtitle1" component="h2">
                {tour.name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              paddingX={1}
            >
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" ml={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              paddingX={1}
            >
              <Rating
                name="read-only"
                defaultValue={tour.rating}
                readOnly
                precision={0.25}
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant="body3" component="p" marginLeft={1.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box paddingX={1}>
              <Typography variant="h6" component="h2" ml={0.5}>
                From C ${tour.price}
              </Typography>
            </Box>
          </CardActionArea>
        </Card>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
