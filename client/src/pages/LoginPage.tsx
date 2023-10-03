import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { Card, Button, Typography, Container } from "@mui/material";
import { PageRoutes } from "../enums/PageRoutes";

const LoginPage = () => {
  const navigate = useNavigate();

  const loginToGoogle = useGoogleLogin({
    onSuccess: (tokenResponse: { access_token: string }) => {
      localStorage.setItem("loginWith", "Google");
      localStorage.setItem("accessToken", tokenResponse.access_token);
      navigate(PageRoutes.Dashboard);
    },
  });

  return (
    <Container
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Card sx={{ mw: "420px", p: "20px" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ textAlign: "center", marginBottom: "20px" }}
        >
          Login with
        </Typography>

        <Button variant="contained" onClick={() => loginToGoogle()}>
          Google
        </Button>
      </Card>
    </Container>
  );
};

export default LoginPage;
