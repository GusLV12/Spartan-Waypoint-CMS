import { Box, CardActionArea, CardMedia } from "@mui/material";

export const ProjectsCards = () => {
  return (
    <Box
      className="flex flex-row justify-center items-center gap-20"
      sx={{ height: "200px" }}
    >
      <CardActionArea
        sx={{
          objectFit: "contain",
          maxWidth: 300,
          borderRadius: "16px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.6)",
          backgroundColor: "#1b0936",
        }}
      >
        <CardMedia
          component="img"
          image="/assets/img/logo.png"
          alt="Spartan"
          sx={{
            height: "100%",
            objectFit: "contain", // Ajuste de object-fit para controlar la imagen
          }}
        />
      </CardActionArea>
      <CardActionArea
        sx={{
          objectFit: "contain",
          maxWidth: 300,
          borderRadius: "16px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.6)",
          backgroundColor: "#090911",
        }}
      >
        <CardMedia
          component="img"
          image="/assets/img/logo.png"
          alt="Spartan"
          sx={{
            height: "100%",
            objectFit: "contain", // Ajuste de object-fit para controlar la imagen
          }}
        />
      </CardActionArea>
      <CardActionArea
        sx={{
          objectFit: "contain",
          maxWidth: 300,
          borderRadius: "16px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.6)",
          backgroundColor: "#042b5d",
        }}
      >
        <CardMedia
          component="img"
          image="/assets/img/logo.png"
          alt="Spartan"
          sx={{
            height: "100%",
            objectFit: "contain", // Ajuste de object-fit para controlar la imagen
          }}
        />
      </CardActionArea>
      <CardActionArea
        sx={{
          objectFit: "contain",
          maxWidth: 300,
          borderRadius: "16px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.6)",
          backgroundColor: "#37235f",
        }}
      >
        <CardMedia
          component="img"
          image="/assets/img/logo.png"
          alt="Spartan"
          sx={{
            height: "100%",
            objectFit: "contain", // Ajuste de object-fit para controlar la imagen
          }}
        />
      </CardActionArea>
    </Box>
  );
};
