import { Box, AppBar, IconButton, Toolbar, Typography, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"

export default function Topbar() {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
            boxShadow: 0,
            bgcolor: "transparent",
            backgroundImage: "none",
            mt: 2,
        }}
      >
        <Container maxWidth="lg">
            <Toolbar
                variant="regular"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexShrink: 0,
                    borderRadius: "999px",
                    backdropFilter: "blur(24px)",
                    maxHeight: 40,
                    border: "1px solid",
                    borderColor: "divider",
                }}
            >
                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center",
                        ml: "-18px",
                        px: 0,
                    }}
                >

                    
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Blueberry Technologies</Typography>
                </Box>
            </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
