import {
  Box,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

export const Performance = () => {
  return (
    <Grid item xs={12} md={4}>
      <Box
        className="flex flex-col items-center justify-center md:ml-8 lg:ml-10 gap-5 md:gap-10"
        sx={{
          mt: {
            xs: "2rem",
          },
        }}
      >
        {/* Primer card */}
        <CardActionArea
          className="p-4 md:p-8"
          sx={{
            maxWidth: {
              xs: 300, // Ocupa todo el ancho en pantallas móviles
              sm: 500, // Anchura más pequeña en pantallas medianas
              md: 500, // Mantiene el ancho original en pantallas grandes
            },
            borderRadius: "16px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.6)",
          }}
        >
          <CardContent className="flex items-center justify-center flex-col">
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "1.5rem", // Texto más pequeño en móviles
                  md: "2rem", // Mantiene el tamaño original para pantallas grandes
                  lg: "3rem",
                },
              }}
            >
              Rendimento Equipo
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              className="flex items-center"
              sx={{
                fontSize: {
                  xs: "1.5rem", // Texto más pequeño en móviles
                  md: "2rem", // Mantiene el tamaño original para pantallas grandes
                  lg: "3rem",
                },
              }}
            >
              9/10
              <img
                src="/assets/icons/smile.svg"
                alt="Smile Icon"
                style={{
                  width: "50px", // Ícono más pequeño en móviles
                  height: "auto",
                  marginLeft: "10px",
                }}
                className="md:w-24" // Mantiene el tamaño original para pantallas grandes
              />
            </Typography>
          </CardContent>
        </CardActionArea>

        {/* Segundo card */}
        <CardActionArea
          className="p-4 md:p-8"
          sx={{
            maxWidth: {
              xs: 300, // Ocupa todo el ancho en pantallas móviles
              sm: 500, // Anchura más pequeña en pantallas medianas
              md: 500, // Mantiene el ancho original en pantallas grandes
            },
            borderRadius: "16px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.6)",
          }}
        >
          <CardContent className="flex items-center justify-center flex-col">
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "1.5rem", // Texto más pequeño en móviles
                  md: "2rem", // Mantiene el tamaño original para pantallas grandes
                  lg: "3rem",
                },
              }}
            >
              Facturación equipo
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              className="flex items-center"
              sx={{
                fontSize: {
                  xs: "1.5rem", // Texto más pequeño en móviles
                  md: "2rem", // Mantiene el tamaño original para pantallas grandes
                  lg: "3rem",
                },
              }}
            >
              $ 3,000 USD
              <img
                src="/assets/icons/smile.svg"
                alt="Smile Icon"
                style={{
                  width: "50px", // Ícono más pequeño en móviles
                  height: "auto",
                  marginLeft: "10px",
                }}
                className="md:w-24" // Mantiene el tamaño original para pantallas grandes
              />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Box>
    </Grid>
  );
};
