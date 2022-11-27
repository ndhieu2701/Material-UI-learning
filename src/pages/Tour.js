import { BottomNavigation, Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordian";
import BasicModal from "../components/BasicModal";

const Tour = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Container sx={{paddingBottom: 10}}>
      <Typography variant="h3" component="h1" mt={3}>
        Explore the world in Vegas
      </Typography>
      <Box
        mt={3}
        sx={{
          display: "flex",
        }}
      >
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          alt="haha"
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" mt={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" mt={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
          voluptates rem quos delectus debitis earum modi, ipsum veritatis.
          Perferendis officiis nobis, aut hic praesentium nulla vero, possimus
          omnis reprehenderit blanditiis quis incidunt minima voluptatibus illum
          quam corporis libero fugiat doloremque. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Exercitationem officiis commodi beatae
          animi incidunt necessitatibus aut provident ad ex. Saepe!
        </Typography>
      </Box>
      <Typography variant="h6" component="h4" mt={3} mb={3}>
        Frequently Asked Questions
      </Typography>
      <CustomizedAccordions/>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
