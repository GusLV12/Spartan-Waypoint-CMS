import { Grid } from "@mui/material";
import { Performance } from "./banners/Performance";
import { ProjectsCards } from "./banners/ProjectsCards";

export const Home = () => {
  return (
    <>
      <Grid
        container
        spacing={10}
        sx={{
          height: {
            xs: "100vh", // Ocupa el 100% del viewport en pantallas pequeñas
            md: "90vh", // Ocupa el 90% del viewport en pantallas medianas y grandes
          },
        }}
      >
        <Grid container item xs={12} rowSpacing={2} spacing={2}>
          <Performance />
          <Grid item xs={12} md={8}>
            <div className="flex w-auto h-full bg-red-800 md:bg-green-500 lg:bg-blue-500 xl:bg-black">
              {/* Cambia de color según la resolución */}
              Hola espartan
            </div>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            height: {
              xs: "auto", // Ajusta la altura automáticamente en pantallas pequeñas
              md: "20vh", // Ocupa el 20% en pantallas grandes
            },
          }}
        >
          <ProjectsCards />
        </Grid>
      </Grid>
    </>
  );
};
