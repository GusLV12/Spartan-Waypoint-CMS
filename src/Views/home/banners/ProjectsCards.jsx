import { Box } from "@mui/material";
import { CardProject } from "../../../components";

export const ProjectsCards = () => {
  return (
    <Box
      className="flex flex-row justify-around items-center flex-wrap gap-10"
      sx={{ height: "auto", maxWidth: "100%", marginBottom: "2rem" }}
    >
      <CardProject media="/assets/img/logo.png" linkTo="/url" />
      <CardProject media="/assets/img/logo.png" linkTo="/url" />
      <CardProject media="/assets/img/logo.png" linkTo="/url" />
      <CardProject media="/assets/img/logo.png" linkTo="/url" />
    </Box>
  );
};
