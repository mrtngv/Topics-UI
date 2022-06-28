import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux'
import Footer from './util/Footer';
import { shuffle } from './util/UtilFunctions';
const axios = require('axios');

export default function Section() {
    const [pageInfo, setPageInfo] = React.useState(null);

    React.useEffect(() => {
        axios
            .get(process.env.REACT_APP_CONFIGURATION)
            .then(results => results.data.configuration)
            .then(data => {
                shuffle(data.topics);
                setPageInfo(data);
            });
    }, []);
    const themeMode = useSelector((state) => state.theme.value);
    const theme = createTheme({
        palette: {
            mode: themeMode,
        },
    });
    return (
        <ThemeProvider theme={theme}>
            {pageInfo ?
                <main>
                    <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                        <Container maxWidth="sm">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom>
                                {pageInfo.emphasizedTitle}
                            </Typography>
                            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                {pageInfo.description}
                            </Typography>
                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={3}
                                justifyContent="center">
                                <Button variant="contained">{pageInfo.emphasizedButton}</Button>
                                {pageInfo.otherButtons.map((button, index) => (
                                    <Button key={index} variant="outlined">{button}</Button>
                                ))}
                            </Stack>
                        </Container>
                    </Box>
                    <Container>
                        <Grid container spacing={3}>
                            {pageInfo.topics.map((topic, index) => (
                                <Grid item key={index} xs={12} sm={6} md={4}>
                                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ pt: '20%', }}
                                            image={topic.image}
                                            alt="photo" />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {topic.allHeaders[0]}
                                            </Typography>
                                            <Typography>
                                                {topic.allHeaders.slice(1).map((header, index) => (
                                                    <span key={index}>
                                                        <Link color="primary" href={topic.name + "/" + (index + 1)} underline="hover">{header}.</Link><br />
                                                    </span>
                                                ))}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">View</Button>
                                            <Button size="small">Edit</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main> : null}
            <Footer />
        </ThemeProvider>
    );
}
