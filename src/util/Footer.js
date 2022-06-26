

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Footer(props) {
  return (
                <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                WhiterabbitX
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    something else
                </Typography>
            </Box>
  );
}

export default Footer;