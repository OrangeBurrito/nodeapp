import express from 'express';

let app = express()

app.get('*', (req, res) => {
	res.send('tinnitusks is a disease that affects elephants and causes a bizarre ringing noise in their tusks')
})

app.listen(80, () => console.log('listening on port 80'))