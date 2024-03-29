import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./Card.css";

export default function Mango() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="mango"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mango
        </Typography>
        <Typography variant="body2" color="text.secondary">
          make strong passwords.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          size="large"
          href="https://github.com/BlueberryTechnologies/Mango">
          <GitHubIcon fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
