import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { PageRoutes } from "../enums/PageRoutes";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true); // State to track email validation

  const handleEmailChange = (e: any) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    // Simple email validation using a regular expression
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsValidEmail(emailPattern.test(enteredEmail));
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (isValidEmail) {
      // Email is valid, you can proceed with login logic here
      navigate(PageRoutes.Dashboard);
    } else {
      // Email is invalid, show an error message or take appropriate action
      console.log("Email is invalid");
    }
  };

  return (
    <Box>
      <Box>
        <TextField
          label="Email"
          value={email}
          onChange={handleEmailChange}
          error={!isValidEmail} // Add error state based on email validation
          helperText={!isValidEmail ? "Invalid email address" : ""}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Typography>Forgot password?</Typography>
        <Checkbox />

        <Button variant="contained" onClick={handleSubmit}>
          Login
        </Button>
        <Button variant="contained" onClick={() => navigate(PageRoutes.Register)}>Register</Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
