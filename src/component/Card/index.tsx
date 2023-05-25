import React, { useState } from "react";

import ReplayIcon from "@mui/icons-material/Replay";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import FlipToBackIcon from "@mui/icons-material/FlipToBack";
import LoginIcon from "@mui/icons-material/Login";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import {
  FormControlLabel,
  IconButton,
  Card,
  Divider,
  CardContent,
  CardHeader,
  Box,
  Button,
  TextField,
  Radio,
  RadioGroup,
  ButtonGroup,
  Typography,
  NativeSelect,
} from "@mui/material";
import ListItem from "./ListItem";

const SideCard = () => {
  const [isAreaVisible, setAreaVisible] = useState(true);
  const [isLayersVisible, setLayersVisible] = useState(true);
  const [isProcessVisible, setProcessVisible] = useState(true);
  const [isResultVisible, setResultVisible] = useState(true);

  const handleToggleContent = (content: string) => {
    switch (content) {
      case "area":
        setAreaVisible((prevVisible) => !prevVisible);
        break;
      case "layers":
        setLayersVisible((prevVisible) => !prevVisible);
        break;
      case "process":
        setProcessVisible((prevVisible) => !prevVisible);
        break;
      case "result":
        setResultVisible((prevVisible) => !prevVisible);
        break;
      default:
        break;
    }
  };

  return (
    <Box
      style={{ height: "100%", backgroundColor: "#E1E3E7", overflow: "auto" }}
    >
      <Card sx={{ margin: "3rem" }}>
        <CardHeader
          title="Area"
          action={
            <IconButton
              onClick={() => {
                handleToggleContent("area");
              }}
            >
              {isAreaVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          }
          avatar={<FlipToBackIcon sx={{ color: "green" }} />}
          titleTypographyProps={{ variant: "h5" }}
        />
        {isAreaVisible && (
          <CardContent className="container">
            <Button
              variant="contained"
              sx={{
                width: "10rem",
                alignSelf: "center",
                margin: "1rem",
                backgroundColor: "#1f6294",
              }}
              startIcon={<ReplayIcon />}
            >
              Reload Last
            </Button>
            <Divider>OR</Divider>
            <Button
              variant="contained"
              sx={{
                width: "10rem",
                alignSelf: "center",
                margin: "1rem",

                backgroundColor: "#1f6294",
              }}
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button>
            <Divider>OR</Divider>
            <TextField
              sx={{
                mt: 2,
                mb: 1,
              }}
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Search..."
            />
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              sx={{
                backgroundColor: "#1976d2",
                padding: "1px",
                marginTop: "1rem",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: "50%",
                  height: "3rem",
                  alignSelf: "center",
                  backgroundColor: "#1f6294",
                }}
                startIcon={<FitScreenIcon />}
              >
                Draw
              </Button>{" "}
              <Button
                disabled
                variant="outlined"
                sx={{
                  width: "50%",
                  height: "3rem",
                  alignSelf: "center",
                  backgroundColor: "white",
                  color: "#1976d2",
                }}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>{" "}
            </ButtonGroup>
          </CardContent>
        )}
      </Card>
      <Card sx={{ margin: "3rem" }}>
        <CardHeader
          title="Layers"
          avatar={<ListIcon sx={{ color: "green" }} />}
          titleTypographyProps={{ variant: "h5" }}
          action={
            <IconButton
              onClick={() => {
                handleToggleContent("layers");
              }}
            >
              {isLayersVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          }
        />
        {isLayersVisible && (
          <CardContent className="container">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <Card sx={{ padding: "1rem", margin: "1rem" }}>
                <FormControlLabel
                  value="2D 
                  "
                  control={<Radio />}
                  label="2D Vectors
                  "
                />
                <Typography
                  sx={{ marginLeft: "1rem" }}
                  variant="h5"
                  component="h5"
                >
                  10 credits/km2
                </Typography>

                <Typography>
                  <ul>
                    <li>Buildings (2D)</li> <li>Buildings (2D)</li>
                  </ul>
                </Typography>
              </Card>
              <Card sx={{ padding: "1rem", margin: "1rem" }}>
                <FormControlLabel
                  value="All Layers
                  "
                  control={<Radio />}
                  label="All Layers

                  "
                />
                <Typography
                  sx={{ marginLeft: "1rem" }}
                  variant="h5"
                  component="h5"
                >
                  30 credits/km2{" "}
                </Typography>

                <Typography sx={{ color: "gray" }}>
                  <ul>
                    Vectors:
                    <li>Buildings (3D)</li> <li>Trees (3D)</li>
                  </ul>
                  <ul>
                    {" "}
                    Rasters:
                    <li>Land Use (2D)</li> <li>DMT</li>
                  </ul>
                </Typography>
              </Card>
            </RadioGroup>

            <Divider></Divider>
            <Typography sx={{ margin: "1rem" }} variant="h5" component="h5">
              Output Formats
            </Typography>
            <Typography sx={{ margin: "1rem", color: "gray" }}>
              Default: GeoJSON & PNG
            </Typography>
            <ListItem></ListItem>
          </CardContent>
        )}
      </Card>
      <Card sx={{ margin: "3rem" }}>
        <CardHeader
          title="Process"
          avatar={<SettingsSuggestIcon sx={{ color: "green" }} />}
          titleTypographyProps={{ variant: "h5" }}
          action={
            <IconButton
              onClick={() => {
                handleToggleContent("process");
              }}
            >
              {isProcessVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          }
        />
        {isProcessVisible && (
          <CardContent className="container">
            <Typography sx={{ margin: "1rem" }} variant="h6" component="h6">
              Imagery Source{" "}
            </Typography>

            <NativeSelect
              defaultValue={30}
              sx={{
                backgroundColor: "#1f6294",
                color: "white",
                padding: "1rem",
              }}
            >
              <option value={10}>Mapbox</option>
              <option value={20}>SecureWatch Vivid</option>
              <option value={30}>Custom Ortho</option>
            </NativeSelect>
            <Button
              variant="outlined"
              sx={{
                width: "15rem",
                alignSelf: "center",
                margin: "1rem",
                backgroundColor: "white",

                color: "#1f6294",
                fontSize: "1rem",
                border: "0",
              }}
              startIcon={<WallpaperIcon />}
            >
              Select Image
            </Button>
            <Divider />
            <Button
              variant="contained"
              startIcon={<PlayArrowIcon />}
              disabled
              sx={{
                width: "15rem",
                height: "5rem",
                alignSelf: "center",
                margin: "1rem",
              }}
            >
              Start Processing
            </Button>
          </CardContent>
        )}
      </Card>
      <Card sx={{ margin: "3rem" }}>
        <CardHeader
          title="Results"
          avatar={<LoginIcon sx={{ color: "green" }} />}
          titleTypographyProps={{ variant: "h5" }}
          action={
            <IconButton
              onClick={() => {
                handleToggleContent("result");
              }}
            >
              {isResultVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          }
        />
        {isResultVisible && <CardContent className="container"></CardContent>}
      </Card>
    </Box>
  );
};
export default SideCard;
