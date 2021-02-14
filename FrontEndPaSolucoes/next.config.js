const withImages = require("next-images")
const withPlugins = require('next-compose-plugins');
const env = {NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV}


module.exports = withPlugins([
    [withImages({})],
    {env:
        {NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV}
    }
]);
