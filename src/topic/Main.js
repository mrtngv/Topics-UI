import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MarkdownUtil from '../util/MarkdownUtil';

function Main(props) {
    const { title } = props;
    const files = ['./blog-post.1.md', './blog-post.2.md'];
    return (
        <Grid
            item
            xs={12}
            md={8}
            sx={{ '& .markdown': { py: 3, }, }}>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Divider />
            {files.map((post, index) => (
                <MarkdownUtil key={index} postLocation={post} />
            ))}
        </Grid>
    );
}

Main.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
};

export default Main;