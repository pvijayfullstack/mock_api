import express from 'express'
import cors from 'cors';
import affiliate from './affiliate'

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/women', affiliate)

app.get('/', (req, res) => {
    
    res.send('some message')
})


app.listen(3001, () => console.log('server start with listen port: 3001'))