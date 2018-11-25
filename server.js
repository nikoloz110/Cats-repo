const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(  express.static( path.join(__dirname, 'public') ) );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let id = 0;

const cats = [
    {name: "Shana", id},
    {name: "Zhana", id: ++id},
    {name: "Daisy", id: ++id},
    {name: "Diana", id: ++id},
    {name: "Brego", id: ++id}
];

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/cats', (req, res) => {
    res.json(cats);
});

app.get('/cats/:name', (req, res) => {
    const name = req.params.name;
    const cat = cats.find( c => c.name.toLowerCase() === name.toLowerCase() );
    res.json(cat);
});

app.post('/cats', (req, res) => {
    const name = req.body.name;
    const cat = {name, id: id++};
    cats.push(cat);
});

app.put('/cats/:name', (req, res) => {
    const name = req.body.name;
    const newName = req.body.newName;
    const cat = cats.find( c => c.name === name );
    cat.name = newName;
})

app.delete('/cats/:name', (req, res) => {
    const name = req.params.name;
    const index = cats.findIndex( c => c.name === name );
    cats.splice(index, 1);

    console.log(cats);
});


app.listen(port, () => console.log(`Listening on Port ${port}`));
