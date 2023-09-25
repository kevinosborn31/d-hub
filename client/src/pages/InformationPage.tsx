import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { informationItems } from '../mocks/_mockInformation';
import { stringify } from 'querystring';

const InformationPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState<string[]>(informationItems);

    const handleSearch = () => {
        const filteredInfo = informationItems.filter((item: any) => item.title.includes(searchValue) || item.information.includes(searchValue))

        setSearchResults(filteredInfo);
    };

    return (
        <Box sx={{ display: "flex", border: '1px solid black', height: "100vh", marginTop: "24px"}}>
            <Box sx={{ flex: "20%" }}>
                <TextField value={searchValue} sx={{ height: "20px" }} fullWidth onChange={(event) => setSearchValue(event?.target.value)} />
                <Button variant="contained" onClick={handleSearch}>Search</Button>
            </Box>
            <Box sx={{ flex: "80%" }}>
                {/* Display search results here */}
                <ul>
                    {searchResults.map((result, index) => (
                        <li key={index}>{result}</li>
                    ))}
                </ul>
            </Box>
        </Box>
    );
}

export default InformationPage;
