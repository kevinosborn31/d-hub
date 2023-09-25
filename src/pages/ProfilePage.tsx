import { Box, Button, TextField, Typography } from "@mui/material";
import { MOCK_USER } from "../mocks/_mockUser";

const ProfilePage = () => {
  const {
    givenNames,
    verified,
    email,
    profilePictureURL,
    medicareNumber,
    sugarRange,
    ketoneWarning,
    surname,
  } = MOCK_USER;

  return (
    <Box>
      <img
        src={profilePictureURL}
        alt={`${givenNames[0]} ${surname} profile photo`}
      />
      <TextField label="First name" value={givenNames[0]} />
      <TextField
        label="Middle name"
        value={givenNames[1] ? givenNames[1] : ""}
      />
      <TextField label="Last name" value={surname} />
      <TextField label="Email" value={email} />
      <Typography>
        {verified ? "Verified" : <Button variant="contained">Verify</Button>}
      </Typography>
      <TextField label="Medicare number" value={medicareNumber} />
    </Box>
  );
};

export default ProfilePage;
