import { Box, Button, Modal, Typography } from "@mui/material";
import { useState, useEffect, FC } from "react";

interface IEmergencyConfirmationModalProps {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
  emergencyNumber: string;
}

const EmergencyConfirmationModal: FC<IEmergencyConfirmationModalProps> = ({
  modalOpen,
  setModalOpen,
  emergencyNumber
}) => {
  const callEmergency = () => {
    window.location.href = `tel:${emergencyNumber}`;
  };

  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      aria-labelledby="emergency-modal-title"
      aria-describedby="emergency-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          maxWidth: 400,
          bgcolor: "white", 
          p: 3, 
          textAlign: "center", 
        }}
      >
        <Typography id="emergency-modal-title" variant="h6">
          Are you sure you want to call emergency services?
        </Typography>
        <Typography id="emergency-modal-description">
          This will call {emergencyNumber} immediately
        </Typography>
        <Button onClick={() => callEmergency()} variant="contained">
          Confirm
        </Button>
      </Box>
    </Modal>
  );
};

export default EmergencyConfirmationModal;
