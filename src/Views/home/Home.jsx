import { Grid } from "@mui/material";
import { Performance } from "./banners/Performance";
import { ProjectsCards } from "./banners/ProjectsCards";
import { ChartSection } from "./banners/ChartSection";

export const Home = () => {
  return (
    <>
      <Grid
        container
        spacing={10}
        sx={{
          background:
            "radial-gradient(circle at center, #0569cd, #002d5a, #001430)", // Gradiente radial
        }}
      >
        <Grid container item xs={12} rowSpacing={2} spacing={2}>
          <Performance />
          <Grid item xs={12} md={8}>
            <div className="flex w-full h-full">
              <ChartSection />
            </div>
          </Grid>
        </Grid>

        <Grid item xs={12} className="flex justify-center items-center">
          <ProjectsCards />
        </Grid>
      </Grid>
    </>
  );
};
