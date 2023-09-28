import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../enums/PageRoutes";

const RegisterPage = () => {
  const [givenNames, setGivenNames] = useState<string[]>(["", ""]); 
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsValidEmail(emailPattern.test(enteredEmail));
  };

  const handleSubmit = () => {
    navigate(PageRoutes.Dashboard)
  }

  return (
    <Box>
      <Box>
        <TextField
          label="First name"
          value={givenNames[0]}
          required
          onChange={(event) =>
            setGivenNames([event.target.value, givenNames[1]])
          }
        />
        <TextField
          label="Middle name"
          value={givenNames[1]}
          onChange={(event) =>
            setGivenNames([givenNames[0], event.target.value])
          }
        />
        <TextField
          label="Surname"
          value={surname}
          required
          onChange={(event) => setSurname(event.target.value)}
        />
        <TextField
          label="Email"
          value={email}
          onChange={handleEmailChange}
          required
          error={!isValidEmail}
          helperText={!isValidEmail ? "Invalid email address" : ""}
        />
        <Button variant="contained" onSubmit={handleSubmit}>Register</Button>
      </Box>
    </Box>
  );
};

export default RegisterPage;
