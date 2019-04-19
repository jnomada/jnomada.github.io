const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('knex')
const app = express();

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'dbuser',
      password : 'MEC123',
      database : 'myexpenses'
    }
});

/* DB Test
db.select('*').from('expenselist').then(data => {
    console.log(data);
})*/


app.use(cors());
app.use(bodyParser.json());

//Routes
app.get('/', (req, res) => {
    res.json('This is working!!');
})

app.post('/addexpense', (req, res) => {
    const {description, type, amount, email } = req.body;
    db('expenselist').insert({
        expdate: new Date(),
        description: description,
        type: type,
        amount: amount,
        email: 'james@gmail.com'
    }).then(response => {
        res.json(response);
    })
    .catch(err => console.log(err));
    
})

app.get('/expenselist', (req, res) => {
    db.select('expdate', 'description', 'type', 'amount').from('expenselist').orderBy('expdate', 'desc')
    /* db.select('*').from('expenselist') */
    .then(data => {
        res.json((data));
    })
    .catch(err => console.log(err))
})

app.listen(3001, () => {
    console.log('App is running on port 3001');
})
