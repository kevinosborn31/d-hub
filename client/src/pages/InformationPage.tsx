import { Box, TextField, Typography, List, ListItem, Divider, ListItemButton } from '@mui/material';
import { useState } from 'react';
import { informationItems } from '../mocks/_mockInformation';
import { InformationItem } from '../interfaces/InformationItem';

const InformationPage = () => {
    const [searchResults, setSearchResults] = useState<InformationItem[]>(informationItems);
    const [searchValue, setSearchValue] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const handleSearch = (searchValue: string) => {
        setSearchValue(searchValue);
        const filteredInfo = informationItems.filter((item: InformationItem) => item.title.includes(searchValue) || item.content.includes(searchValue));

        setSearchResults(filteredInfo);
    };

    return (
        <Box sx={{ display: "flex", border: '1px solid black', height: "100vh", marginTop: "24px" }}>
            <Box sx={{ flex: "25%", display: "flex", flexDirection: 'column', padding: '16px' }}>
                <Box sx={{ display: 'flex', flexDirection: "row", alignItems: 'center', height: "50px" }}>
                    <TextField
                        sx={{ height: "20px" }}
                        fullWidth
                        value={searchValue}
                        onChange={(event) => handleSearch(event?.target.value)}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '40px'}}>
                    <Divider sx={{ marginBottom: '20px'}} />
                    {
                        searchResults.length > 0 ?
                        <List>
                            {searchResults.map((item, index) => (
                                <ListItem sx={{ width: '100%' }} key={index}>
                                <ListItemButton onClick={() => setContent(item.content)} >
                                    <Typography>{item.title}</Typography>
                                </ListItemButton>
                                </ListItem>
                            ))}
                        </List> :
                        <>
                        <Typography sx={{ marginBottom: '8px'}}>No search results found</Typography>
                        {informationItems.map((item, index) => (
                            <ListItem sx={{ width: '100%' }} key={index}>
                                <ListItemButton onClick={() => setContent(item.content)} >
                                <Typography>{item.title}</Typography>
                                </ListItemButton>
                            </ListItem>
                        ))}
                        </>
                    }
                </Box>
            </Box>
            <Box sx={{ flex: "75%", padding: "32px" }}>
                {content}
            </Box>
        </Box>
    );
}

export default InformationPage;
