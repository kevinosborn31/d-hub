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
    // Add your save logic here
  };

  const [glucoseRange, setGlucoseRange] = useState<number[]>(sugarRange as any);
  const [ketoneLevel, setKetoneLevel] = useState<number>(ketoneWarning as any);
  const [userGivenNames, setUserGivenNames] = useState<string[]>(givenNames as any);
  const [userSurname, setUserSurname] = useState<string>(surname);
  const [medicare, setMedicare] = useState<string>(medicareNumber as any);
  const [profilePicture, setProfilePicture] = useState<string>(profilePictureURL as any);
  const [userEmail, setUserEmail] = useState<string>(email);
  const [verification, setVerification] = useState<boolean>(verified);

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
        <TextField
          label="First name"
          value={userGivenNames[0]}
          onChange={(event) =>
            setUserGivenNames([event.target.value, ...userGivenNames.slice(1)])
          }
        />
        <TextField
          label="Middle name"
          value={userGivenNames[1] ? userGivenNames[1] : ""}
          onChange={(event) =>
            setUserGivenNames([userGivenNames[0], event.target.value])
          }
        />
        <TextField
          label="Last name"
          value={userSurname}
          onChange={(event) => setUserSurname(event.target.value)}
        />
      </Box>
      <Box>
        <TextField
          label="Email"
          value={userEmail}
          fullWidth
          onChange={(event) => setUserEmail(event.target.value)}
        />
      </Box>
      <Box>
        <Box>
          <TextField
            label="Medicare number"
            value={medicare}
            fullWidth
            onChange={(event) => setMedicare(event.target.value)}
          />
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
            onChange={(_, newValue) => setGlucoseRange(newValue as number[])}
          />
        </Box>
        <Box>
          <Typography>Ketone warning</Typography>
          <TextField
            type="number"
            variant="outlined"
            value={ketoneLevel}
            onChange={(event) => setKetoneLevel(Number(event.target.value))}
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
