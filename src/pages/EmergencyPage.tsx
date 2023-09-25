import { Box, Button, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import EmergencyConfirmationModal from "../components/EmergencyConfirmationModal";
import Iconify from '../components/Iconify';
import { EMERGENCY_NUMBERS } from "../constants/EmergencyNumbers"
import { fetchLocationInfo } from '../utils/fetchLocationInfo';

const EmergencyPage = () => {
    const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
    const [emergencyNumber, setEmergencyNumber] = useState("000"); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const country = await fetchLocationInfo();
                const relevantEmergencyNumber = EMERGENCY_NUMBERS[country] || "000";
                setEmergencyNumber(relevantEmergencyNumber);
            } catch (error) {
                console.error('Error fetching location information:', error);
                setEmergencyNumber("000"); 
            }
        };

        fetchData();
    }, []);



    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Typography sx={{ marginBottom: "16px" }}>The emergency number for your current location is {emergencyNumber}</Typography>
            <Button
                onClick={() => setConfirmationModalOpen(true)}
                variant="contained"
                sx={{ bgcolor: '#E74C3C', color: 'white', width: '250px', height: '60px' }}
            >
                <Iconify sx={{ width: "40px", height: "40px", marginRight: "10px" }} icon="eva:alert-triangle-outline" />
                Emergency call
            </Button>
            <EmergencyConfirmationModal emergencyNumber={emergencyNumber} modalOpen={confirmationModalOpen} setModalOpen={setConfirmationModalOpen} />
        </Box>
    );
}

export default EmergencyPage;
