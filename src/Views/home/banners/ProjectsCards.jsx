import { Box } from "@mui/material";
import { CardProject } from "../../../components";

export const ProjectsCards = () => {
  return (
    <Box
      className="flex flex-row justify-around items-center flex-wrap"
      sx={{ height: "auto", maxWidth: "100%" }}
    >
      <CardProject media="/assets/img/logo.png" linkTo="/url" />
      <CardProject media="/assets/img/logo.png" linkTo="/url" />
      <CardProject media="/assets/img/logo.png" linkTo="/url" />
      <CardProject media="/assets/img/logo.png" linkTo="/url" />
    </Box>
  );
};
