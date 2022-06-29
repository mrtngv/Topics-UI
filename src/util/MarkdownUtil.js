import * as React from 'react';
import Markdown from 'markdown-to-jsx';
const axios = require('axios');

export default function MarkdownUtil(props) {
    const [text, setText] = React.useState('');

    React.useEffect(() => {
        axios
            .get(process.env.REACT_APP_MOCK_MD)
            .then(response => {
                setText(response.data);
            });
    }, []);

    return (
        <div className="post">
            <Markdown children={text} />
        </div>
    );
}