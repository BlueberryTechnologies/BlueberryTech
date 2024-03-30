import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Mango from "./ProjectCards/Mango";
import ClosetIQ from "./ProjectCards/ClosetIQ";

import "./Projects.css"; // CSS File

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Projects() {
  return (
    <Box className="box" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <Mango />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <ClosetIQ />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
