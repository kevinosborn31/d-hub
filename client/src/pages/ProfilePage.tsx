import { Box, Button, Slider, TextField, Typography } from "@mui/material";
import { MOCK_USER } from "../mocks/_mockUser";
import { useState } from "react";

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

  const onSave = () => {
    return {

    }
  };

  // TODO hook these up
  const [glucoseRange, setGlucoseRange] = useState<number[]>(sugarRange as any);
  const [ketoneLevel, setKetoneLevel] = useState(ketoneWarning);
  const [userGivenNames, setUserGivenNames] = useState(givenNames);
  const [userSurname, setUserSurname] = useState(surname);
  const [medicare, setMedicare] = useState(medicareNumber);
  const [profilePicture, setProfilePicture] = useState(profilePictureURL);
  const [userEmail, setUserEmail] = useState(email);
  const [verification, setVerification] = useState(verified);

  const handleSugarChange = (event: any) => {
    setGlucoseRange([...event.target.value]);
  };

  const handleKetoneChange = (event: any) => {
    const level = event.target.value;
    setKetoneLevel(Number(level));
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginTop: "50px",
      }}
    >
      <Box>
        <img
          src={profilePicture}
          alt={`${userGivenNames[0]} ${userSurname} profile photo`}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <TextField label="First name" value={userGivenNames[0]} />
        <TextField
          label="Middle name"
          value={userGivenNames[1] ? userGivenNames[1] : ""}
        />
        <TextField label="Last name" value={userSurname} />
      </Box>
      <Box>
        <TextField label="Email" value={userEmail} fullWidth />
      </Box>
      <Box>
        <Box>
          <TextField label="Medicare number" value={medicare} fullWidth />
        </Box>
        <Box sx={{ marginTop: "16px" }}>
          {verification ? (
            <Typography>Verified</Typography>
          ) : (
            <Button variant="contained" onClick={() => onVerify()}>
              Verify now
            </Button>
          )}
        </Box>
        <Box>
          <Slider
            min={1}
            max={30}
            getAriaLabel={() => "Glucose Range"}
            value={glucoseRange}
            onChange={handleSugarChange}
          />
        </Box>
        <Box>
          <Typography>Ketone warning</Typography>
          <TextField
            type="number"
            variant="outlined"
            fullWidth
            value={ketoneLevel}
            onChange={() => handleKetoneChange}
          />
        </Box>
        <Box sx={{ marginTop: "16px" }}>
          <Button variant="contained" onClick={() => onSave()}>
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
