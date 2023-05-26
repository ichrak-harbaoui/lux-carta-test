import React, { useState } from "react";

import Map from "./component/Map";
import SideCard from "./component/Card";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import LoginIcon from "@mui/icons-material/Login";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
const App = () => {
  const [events, setEvents] = useState({});

  return (
    <Box sx={{ flexDirection: "row" }}>
      <AppBar>
        <Toolbar
          sx={{
            backgroundColor: "#1f6294",
            color: "white",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">BrightEarth Cloud Service</Typography>

          <div>
            <Button
              color="inherit"
              variant="outlined"
              sx={{
                borderColor: "white",
                margin: "0.5rem",
                borderRadius: "5px",
              }}
              startIcon={<LoginIcon />}
            >
              Load Existing{" "}
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              sx={{
                borderColor: "white",
                margin: "0.5rem",
                borderRadius: "5px",
              }}
              startIcon={<BlurCircularIcon />}
            >
              Help{" "}
            </Button>

            <Button
              variant="outlined"
              color="inherit"
              sx={{
                borderColor: "white",
                margin: "0.5rem",
                borderRadius: "5px",
              }}
              startIcon={<ListIcon />}
            >
              Changelog
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          marginTop: "10%",
          height: "100vh",
          justifyContent: "center",
          backgroundColor: "#E1E3E7",
        }}
      >
        <SideCard />

        <Box sx={{ flex: { xs: "1", sm: "1" } }}>
          <Map events={events} setEvents={setEvents} />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
