import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from '../util/Footer';
import { useSelector } from 'react-redux'
import * as mock from '../mock/subTopicMock';

const errorMsg = mock.LINK_DESCRIPTION;
console.log(errorMsg);

const mainFeaturedPost = {
    title: mock.TITLE,
    description:
    mock.DESCRIPTION,
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: mock.LINK_DESCRIPTION,
};

const featuredPosts = [
    {
        title: mock.POST1.title,
        date: mock.POST1.date,
        description:mock.POST1.description,
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
    },
    {
        title: mock.POST2.title,
        date: mock.POST2.date,
        description:mock.POST2.description,
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
    },
];

const sidebar = {
    title: mock.SIDE_TITLE,
    description: mock.SIDE_DESCRIPTION,
    archives: mock.RESOURCES,
    contacts: [
        { name: 'GitHub', icon: GitHubIcon, url: mock.SOCIAL_HUB },
        { name: 'LinkedIn', icon: LinkedInIcon, url: mock.SOCIAL_IN },
    ],
};

export default function Topic() {
    const themeMode = useSelector((state) => state.theme.value);
    const theme = createTheme({
        palette: {
            mode: themeMode,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                    <Grid container spacing={5} sx={{ mt: 3 }}>
                        <Main title="" posts={['post']} />
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                            social={sidebar.contacts}
                        />
                    </Grid>
                </main>
            </Container>
            <Footer />
        </ThemeProvider>
    );
}