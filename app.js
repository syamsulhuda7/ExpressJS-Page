const express = require('express');
const app = express();
const router = require('./routes');

app.use(router);
app.use((req, res, next) => {
    res.status(404)
    res.send({
        status: 'failed',
        message: 'Resource ' + req.originalUrl + ' Not Found'
    });
});

app.listen(3000, () => console.log('server: http://localhost:3000'));