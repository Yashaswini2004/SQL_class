const React = require("react");

function Home({ count }) {
    return (
        <html>
            <head>
                <title>Home Page</title>
            </head>
            <body>
                <h1>The Total Number of Users: {count}</h1>
            </body>
        </html>
    );
}

module.exports = Home; 
