import { useState } from "react";
import { auth } from "@appFirebase";
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Image,
} from "@mantine/core";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: "100vh",
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    height: "100vh",
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const Login = () => {
  const { classes } = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  const handleLogin = () => {
    const data = getValues();
    setIsLoading(true);
    if (data.email && data.password) {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((cred) => {
          setIsLoading(false);
          console.log("user logged in:", cred);
        })
        .catch((err) => {
          console.log("error", err);
          setIsLoading(false);
          console.log(err.message);
        });
    }
  };
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <div>
          <div>{/* <Image /> */}</div>
          <Title
            order={2}
            className={classes.title}
            align="center"
            mt="md"
            mb={50}
          >
            Bienvenido
          </Title>

          <TextInput
            label="Correo institucional"
            placeholder="mi.correo@hotmail.com"
            size="md"
            {...register("email")}
          />
          <PasswordInput
            label="Contraseña"
            placeholder="Contraseña"
            mt="md"
            size="md"
            {...register("password")}
          />
          <Button fullWidth mt="xl" size="md" onClick={handleLogin}>
            Iniciar sesión
          </Button>
        </div>
      </Paper>
    </div>
  );
};
export default Login;
