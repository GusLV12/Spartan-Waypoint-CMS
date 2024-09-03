import { Grid } from "@mui/material";

export const Home = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ height: "90vh" }} // Asegura que el contenedor ocupe toda la altura del viewport
      >
        <Grid
          container
          item
          xs={12}
          rowSpacing={2} // Espaciado entre las filas internas del contenedor
          spacing={2} // Espaciado entre los elementos internos del contenedor
          sx={{ height: "70vh" }} // El primer Grid ocupará el 70% del viewport
        >
          <Grid item xs={12} sm={4} sx={{ mb: 2 }}>
            {" "}
            {/* Espaciado inferior */}
            <img
              src="assets/img/logo.png"
              alt="Logo"
              className="bg-green-700"
              style={{ height: "100%", width: "100%", objectFit: "cover" }} // Asegura que la imagen ocupe todo el espacio
            />
          </Grid>
          <Grid item xs={12} sm={8} sx={{ mb: 2 }}>
            {" "}
            {/* Espaciado inferior */}
            <img
              src="assets/img/logo.png"
              alt="Logo"
              className="bg-green-700"
              style={{ height: "100%", width: "100%", objectFit: "cover" }} // Asegura que la imagen ocupe todo el espacio
            />
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ height: "25vh" }} // Segundo Grid
        >
          <img
            src="assets/img/logo.png"
            alt="Logo"
            className="bg-red-800"
            style={{ height: "100%", width: "100%", objectFit: "cover" }} // Asegura que la imagen ocupe todo el espacio
          />
        </Grid>
      </Grid>
    </>
  );
};
