import { useForm, Controller } from "react-hook-form";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Asegúrate de que la ruta sea correcta

const initialValues = {
  email: "",
  password: "",
};

export const Login = () => {
  const navigate = useNavigate();
  const { setUserEmail } = useAuth(); // Obtener la función para actualizar el correo electrónico

  const { control, handleSubmit } = useForm({
    defaultValues: initialValues,
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log("Formulario enviado:", data);
    if (data.email === "admin@admin.com" && data.password === "123") {
      setUserEmail(data.email); // Guardar el correo electrónico en el contexto
      navigate("/");
    } else {
      console.log("Credenciales incorrectas.");
    }
  };

  return (
    <Grid
      spacing={0}
      container
      className="flex flex-col items-center justify-center min-h-screen w-full"
      style={{
        background:
          "radial-gradient(circle at center, #0569cd, #002d5a, #001430)",
        padding: "0 16px",
      }}
    >
      <Grid
        item
        className="flex w-full h-[150px] md:h-[300px] justify-center items-center"
      >
        <img
          src="assets/img/logo.png"
          alt="Spartan"
          className="w-[700px]"
          style={{ aspectRatio: "16/9", objectFit: "contain" }}
        />
      </Grid>
      <Card
        className="w-[90%] max-w-[550px] z-10 m-0  mt-[-500px] md:mt-[-150px]"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "none",
        }}
      >
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Typography
                  component="label"
                  htmlFor="email"
                  className="text-white"
                >
                  Email / Número Tel.
                </Typography>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="email"
                      label="Correo"
                      required
                      variant="filled"
                      InputProps={{
                        style: { backgroundColor: "white", color: "black" },
                      }}
                      fullWidth
                    />
                  )}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Typography
                  component="label"
                  htmlFor="password"
                  className="text-white"
                >
                  Contraseña
                </Typography>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="password"
                      label="Contraseña"
                      required
                      variant="filled"
                      InputProps={{
                        style: { backgroundColor: "white", color: "black" },
                      }}
                      fullWidth
                    />
                  )}
                />
              </div>
            </div>
            <CardActions>
              <Button
                type="submit"
                style={{
                  backgroundColor: "#0569cd",
                  color: "white",
                }}
                fullWidth
                variant="contained"
              >
                Entrar
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};
