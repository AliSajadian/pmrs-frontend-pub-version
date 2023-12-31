import { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";


const About: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "inherit",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      data-testid="about-box"
    >
      <Typography variant="h3">About</Typography>
    </Box>
  );
};

export default About;