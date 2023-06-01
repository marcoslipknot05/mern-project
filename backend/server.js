app.use('/cities', require('./routes/cities'))
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.jason());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(cors());