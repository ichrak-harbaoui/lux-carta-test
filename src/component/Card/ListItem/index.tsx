import {
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Theme,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const ListItem = () => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const names = ["SpatiaLite", "GeoPackage", "Shapefile (zipped)"];
  const theme = useTheme();
  const [personName, setPersonName] = useState<string[]>([]);
  function getStyles(
    name: string,
    personName: readonly string[],
    theme: Theme
  ) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Select
      multiple
      displayEmpty
      value={personName}
      onChange={handleChange}
      input={<OutlinedInput />}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return <em>Vectors</em>;
        }

        return selected.join(", ");
      }}
      MenuProps={MenuProps}
      inputProps={{ "aria-label": "Without label" }}
      sx={{ backgroundColor: "#1f6294", color: "white" }}
    >
      <MenuItem disabled value="">
        <em>Vectors</em>
      </MenuItem>
      {names.map((name) => (
        <MenuItem
          key={name}
          value={name}
          style={getStyles(name, personName, theme)}
        >
          {name}
        </MenuItem>
      ))}
    </Select>
  );
};
export default ListItem;
