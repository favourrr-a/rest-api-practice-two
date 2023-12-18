const express = require('express');
const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const app = express();
const PORT = 3000;

app.get('/', (homeController.getHomePage))

app.get('/about', (aboutController.getAboutPage))

app.get('/blog', (req, res) => {
    res.send('whats good yall')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
