require('dotenv').config();

const hbs = require("hbs");
const path = require("path");

const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, '/public/views/partials'));

app.get('/', (req,res) => {
    res.render('login');
})
app.get('/main', (req, res) => {
    res.render('index');
})
app.get('/index1', (req, res) => {
    res.render('index-boxed');
})
app.get('/clientes', (req, res) => {
    res.render('clientes');
})
app.get('/proveedores', (req, res) => {
    res.render('proveedores');
})
app.get('/proveedoresT', (req, res) => {
    res.render('tablaPd');
})
app.get('/productos', (req, res) => {
    res.render('productos');
})
app.get('/productosT', (req, res) => {
    res.render('tablaPt');
})
app.get('/contratos', (req, res) => {
    res.render('contratos');
})
app.get('/contratosT', (req, res) => {
    res.render('table_basic');
})
app.get('/empaquetados', (req, res) => {
    res.render('empaquetados');
})
app.get('/empaquetadosT', (req, res) => {
    res.render('tablae');
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})
