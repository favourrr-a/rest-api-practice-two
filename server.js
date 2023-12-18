const express = require('express');
const homeController = require('./controllers/homeController');
const app = express();
const PORT = 3000;

app.get('/', (homeController.getHomePage))

app.get('/blog', (req, res) => {
    res.send('whats good yall')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
