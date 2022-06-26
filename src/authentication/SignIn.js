import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function SignIn() {
    const [errorText, setErrorText] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (data.get('key').length !== 32) {
            setErrorText("Key must be exactly 32 character long!");
            return;
        }
        window.location.href = 'http://localhost:3000/';
    };

    const onMouseEnterAvatar = (event) => {
        event.target.style.cursor = 'pointer';
    }

    const onAvatarGitHubClick = () => {
        window.location.href = 'https://github.com/mrtngv/Topics-UI';
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">Sign in</Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            onChange={() => setErrorText('')}
                            error={errorText === '' ? false : true}
                            placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx"
                            multiline
                            helperText={errorText}
                            variant="filled"
                            margin="normal"
                            required
                            fullWidth
                            id="key"
                            label="Key"
                            name="key"
                            autoFocus />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="signup" variant="body2">{"Don't have an account? Sign Up"}</Link>
                            </Grid>
                        </Grid>
                        <Stack sx={{ marginTop: 8, }} align="center" spacing={2}>
                            <Typography variant="body1" color="text.secondary" align="center">
                                WhiterabbitX
                            </Typography>
                            <Avatar onMouseEnter={onMouseEnterAvatar} align="center" onClick={onAvatarGitHubClick} alt="GitHub" src="/GitHub-Mark-Light-64px.png" />
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}