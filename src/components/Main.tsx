import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Avatar, Box, Button, Grid, Icon, List, ListItem, ListItemText, Typography, createTheme } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';
import LanguageIcon from '@mui/icons-material/Language';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { green, purple } from '@mui/material/colors';


function Main() {
    const [avatarUrl, setAvatarUrl] = React.useState<string>('');

    useEffect(() => {
        fetch('https://api.github.com/users/harunugurlu')
            .then(response => response.json())
            .then(data => {
                setAvatarUrl(data.avatar_url);
                console.log(avatarUrl);
            })
            .catch(error => console.log(error));

    }, [])

    const skills = [
        'C#',
        'Java',
        'Python',
        'JavaScript',
        'TypeScript',
        'React',
        'SQL',
    ]
    return (
        <Grid
            container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            spacing={6}
        >
            <Grid item display="flex" flexDirection="column" alignItems="center" xs={6}>
                <Box>
                    <a href="https://github.com/harunugurlu" target='_blank'>
                        <Avatar src={avatarUrl} alt="Profile Picture"
                            sx={{ width: '8rem', height: '8rem' }} />
                    </a>
                </Box>
                <Typography variant="h2" color="primary.main">Harun Uğurlu</Typography>
                <Typography variant="h4" color="primary.main"> Computer Engineering Student</Typography>
            </Grid>
            <Grid item display="flex" flexDirection="column" alignItems="center" xs={6}>
                <Typography variant="h4" color="primary.main">Skills</Typography>
                <List sx={{
                    listStyleType: 'disc',
                    pl: 2,
                    '& .MuiListItem-root': {
                        display: 'list-item',
                    },
                    color: 'primary.main'
                }}>
                    <ListItem>
                        {skills.map((skill) => {
                            return (
                                <Typography variant='h5' color="primary.main">{skill}</Typography>
                            )
                        })}
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}

export default Main;
