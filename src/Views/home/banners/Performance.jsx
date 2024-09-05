import { CardActionArea, CardContent, Grid, Typography } from "@mui/material";

export const Performance = () => {
  return (
    <Grid
      className="flex items-center justify-center"
      item
      xs={12}
      sm={4}
      sx={{ mb: 2 }}
    >
      <CardActionArea
        className="p-8"
        sx={{
          maxWidth: 500,
          borderRadius: "16px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.6)",
        }}
      >
        <CardContent className="flex items-center justify-center flex-col">
          <Typography variant="h3" gutterBottom>
            Rendimento Equipo
          </Typography>
          <Typography variant="h3" gutterBottom className="flex items-center">
            9/10
            <img
              src="/assets/icons/smile.svg"
              alt="Smile Icon"
              style={{ width: "90px" }}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Grid>
  );
};
