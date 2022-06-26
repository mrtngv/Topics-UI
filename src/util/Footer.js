

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Counter } from '../features/counter/Counter';

function Footer(props) {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                WhiterabbitX
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
                🤟Linkin Park 🤟 - Talking to Myself
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p">
                {"Redux => example with global state {count}:\nCheck also the heading of the page :)"}
                <Counter></Counter>
            </Typography>
        </Box>
    );
}

export default Footer;