import express from "express"
import morgan from "morgan"
const app = express()
const PORT = 5000

app.use(morgan("dev"))
app.use(express.static('public'))

app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(PORT, () => console.log(`backend started on port: http://localhost:${PORT}/`))


app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
});
app.get('/contact', (req, res) => {
    res.render('index', { message: 'The Contact Page' });
});
app.get('/about', (req, res) => {
    res.render('index', { message: 'The About Page' });
});

app.get('*', (req, res) => {
    res.status(404).render('index', { message: 'Not Found' });
});