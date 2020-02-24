import express from 'express'
import cors from 'cors';
import affiliate from './affiliate'

const app = express()

app.use('/women', affiliate)

app.get('/', (req, res) => {
    
    res.send('some message')
})

app.listen(3001, () => console.log('server start with listen port: 3001'))