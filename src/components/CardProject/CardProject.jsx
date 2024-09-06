import { CardActionArea, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

export const CardProject = ({ media, linkTo }) => {
  return (
    <CardActionArea
      component={Link}
      to={linkTo}
      sx={{
        objectFit: "contain",
        maxWidth: "350px",
        minWidth: "350px",
        borderRadius: "16px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.6)",
        backgroundColor: "#1b0936",
      }}
    >
      <CardMedia
        component="img"
        image={media}
        alt="Spartan"
        sx={{
          height: "100%",
          objectFit: "contain",
        }}
      />
    </CardActionArea>
  );
};
