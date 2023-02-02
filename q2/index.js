const express = require('express');
const app = express();
const path = require('path');
const bparser = require('body-parser');

app.use(bparser.urlencoded());

app.get('/', (req, res) => {
    res.send('<form action="/result" method="post"><label>Name<input type="text" name="name" /></label><label>Age<input type="text" name="age" /></label><input type="submit" value="Submit Query" /></form>');
});

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    if (!name) {
        name = "person";
    }
    if (!age) {
        age = 1;
    }
    res.send(`Welcome ${name}, age ${age}`);
});

app.listen(3000);