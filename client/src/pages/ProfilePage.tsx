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

  const onVerify = () => {
    console.log(`verifying user ${email}`);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "50px" }}>
      <Box>
        <img
          src={profilePictureURL}
          alt={`${givenNames[0]} ${surname} profile photo`}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: '12px'}}>
        <TextField label="First name" value={givenNames[0]} />
        <TextField
          label="Middle name"
          value={givenNames[1] ? givenNames[1] : ""}
        />
        <TextField label="Last name" value={surname} />
      </Box>
      <Box>
        <TextField label="Email" value={email} fullWidth />
      </Box>
      <Box>
        <Box>
          <TextField label="Medicare number" value={medicareNumber} fullWidth />
        </Box>
        <Box sx={{ marginTop: "16px" }}>
          {verified ? (
            <Typography>"Verified"</Typography>
          ) : (
            <Button variant="contained" onClick={() => onVerify()}>
              Verify now
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
