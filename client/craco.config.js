const path = require('path')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@selectors': path.resolve(__dirname, 'src/redux/selectors/'),
            '@thunks': path.resolve(__dirname, 'src/redux/thunks/'),
            '@slices': path.resolve(__dirname, 'src/redux/slices/'),
            '@builders': path.resolve(__dirname, 'src/redux/builders/'),
            '@store': path.resolve(__dirname, 'src/redux/store/'),
            '@assets': path.resolve(__dirname, 'src/assets/'),
            '@services': path.resolve(__dirname, 'src/services/'),
            '@static': path.resolve(__dirname, 'src/static/'),
            '@api': path.resolve(__dirname, 'src/api/'),
            '@constants': path.resolve(__dirname, 'src/constants/'),
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
            '@helpers': path.resolve(__dirname, 'src/helpers/'),
        },
    },
    style: {
        postcssOptions: {
            plugins: [tailwindcss, autoprefixer],
        },
        // postcss: {
        //     plugins: [tailwindcss, autoprefixer],
        // },
    },
    babel: {
        plugins: [
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            ['@babel/plugin-proposal-private-methods', { loose: true }],
            [
                '@babel/plugin-proposal-private-property-in-object',
                { loose: true },
            ],
        ],
    },
    devServer: {
        port: 3000,
        hot: true,
    },
}
