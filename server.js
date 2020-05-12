const express = require('express');
const PORT = 3000;
const bodyParser = require('body-parser')

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate venenatis lectus nec consequat. Nunc finibus felis pulvinar magna pharetra commodo. Integer eget fermentum arcu, id posuere orci. Mauris eget feugiat sapien, tristique interdum augue. Sed ut varius metus, id ornare augue. In arcu nibh, vulputate ut sem sed, dignissim ultrices neque. Pellentesque eleifend ipsum nunc, non elementum nisl aliquam ac. Donec quis lorem porttitor, volutpat velit et, gravida metus. Duis porta nisi non posuere tristique. Curabitur vel mollis lacus. Morbi sed eros quis dolor eleifend sagittis et in elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;'

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {text: text});
})

app.get('/about', (req, res) => {
    res.render('about', {text: text});
})

app.get('/contact', (req, res) => {
    res.render('contact', {text: text});
})

app.get('/compose', (req, res) => {
    res.render('compose');
})

app.post('/newpost', (req, res) => {
    console.log(req.body);
})
app.listen(PORT, () => {
    console.log(`Server up and running at PORT ${PORT}`);
})