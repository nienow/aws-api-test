const app = require('./app');

const port = process.env.PORT || 8080;

// const startDelay = process.env.NODE_ENV === 'development' ? 0 : 10000;
console.log(`Starting up...`);

// setTimeout(() => {
app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
});
// }, startDelay);

