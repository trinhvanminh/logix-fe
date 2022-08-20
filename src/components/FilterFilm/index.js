import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import FilterMenu from "../FilterMenu";

const FilterFilm = () => {
  const filterTitleSx = {
    fontweight: "bold",
    marginBottom: "16px",
    color: "white",
  };
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={2}
      justifyContent="space-between"
      sx={{
        bgcolor: (theme) => theme.default.secondBgColor,
        borderRadius: "8px",
        p: "16px",
        mb: 4,
      }}
    >
      <Stack>
        <Typography sx={filterTitleSx}>Loại phim:</Typography>
        <FilterMenu />
      </Stack>
      <Stack>
        <Typography sx={filterTitleSx}>Thể loại:</Typography>
        <FilterMenu />
      </Stack>
      <Stack>
        <Typography sx={filterTitleSx}>Quốc gia:</Typography>
        <FilterMenu />
      </Stack>
      <Stack>
        <Typography sx={filterTitleSx}>Năm:</Typography>
        <FilterMenu />
      </Stack>
      <Stack>
        <Typography sx={filterTitleSx}>Thời lượng</Typography>
        <FilterMenu />
      </Stack>
      <Stack>
        <Typography sx={filterTitleSx}>Sắp xếp:</Typography>
        <FilterMenu />
      </Stack>
    </Stack>
  );
};

export default FilterFilm;
