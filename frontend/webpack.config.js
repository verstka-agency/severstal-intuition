module.exports = {
    resolve: {
        fallback: { "timers": require.resolve('timers-browserify') },
        disableHostCheck: true,

    },
    allowedHosts: ['.ngrok.io'], // TODO: delete before prod
};