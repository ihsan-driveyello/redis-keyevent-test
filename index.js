const express = require('express');
const app = express();
const redis = require('redis');

const client = redis.createClient(6379, 'redis-qa.2yr8wl.ng.0001.apse2.cache.amazonaws.com', {
    return_buffers: false,
    db            : 4
});

client.once('connect', function () {
    console.log('==============================================================');
    console.log('|| Redis connected ||');
    console.log('==============================================================\n');
});

client.on('error', (err)=>console.log(err));

app.get('/', (req, res) => {
    console.log('yo dude');
    res.send('Hello World!')
});

app.post('/', (req,res)=>{
    res.send(redisOptions)
})

app.listen(2376, () => console.log('Example app listening on port 3000!'));

