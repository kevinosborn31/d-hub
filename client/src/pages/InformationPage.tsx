import { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { TabPanel, TabContext } from '@mui/lab';
import ChatBotWindow from '../components/ChatBotWindow';
import FAQSearch from '../components/FAQSearch';

const InformationPage = () => {
  const [tabValue, setTabValue] = useState('faq'); // Initial tab value

  const handleChange = (newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={(event, value) => handleChange(value)}>
            <Tab label="FAQ" value="faq" />
            <Tab label="Chatbot" value="chatbot" />
          </Tabs>
        </Box>
        <TabPanel value="chatbot">
          <ChatBotWindow />
        </TabPanel>
        <TabPanel value="faq">
          <FAQSearch />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default InformationPage;
