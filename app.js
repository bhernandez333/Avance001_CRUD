const app = require('express')();
const bodyParser = require('body-parser');
const miMiddleware = require('./middleware/logger');
const port = 3000;
var cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(miMiddleware.logger);
app.use('/contacts', require('./routes/contact_routes'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

// app.js (inicializar) -> middleware -> routes -> services -> infraestructure