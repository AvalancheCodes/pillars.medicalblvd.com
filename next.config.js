const path = require('path');

module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            includePaths: [path.join(__dirname, 'styles')],
                        },
                    },
                },
            ],
        });

        return config;
    },
};
