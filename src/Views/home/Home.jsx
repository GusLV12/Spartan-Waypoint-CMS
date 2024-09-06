import { Grid } from "@mui/material";
import { Performance } from "./banners/Performance";
import { ProjectsCards } from "./banners/ProjectsCards";

export const Home = () => {
  return (
    <>
      <Grid
        container
        spacing={10}
        sx={{ height: "90vh" }} // Asegura que el contenedor ocupe toda la altura del viewport
      >
        <Grid
          container
          item
          xs={12}
          rowSpacing={2} // Espaciado entre las filas internas del contenedor
          spacing={2} // Espaciado entre los elementos internos del contenedor
          sx={{ height: "60vh" }} // El primer Grid ocupará el 70% del viewport
        >
          <Performance />
          <Grid item xs={12} sm={8} sx={{ mb: 2 }}>
            <div className="flex w-full h-full bg-red-800">Hola espartan</div>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ height: "20vh" }} // Segundo Grid
        >
          <ProjectsCards />
        </Grid>
      </Grid>
    </>
  );
};
