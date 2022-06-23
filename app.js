const express = require("express");
const app = express();
const morgan = require('morgan')

app.use(morgan('dev'));

const staticMiddleware = express.static(__dirname + '/public')
app.use(staticMiddleware)
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    console.log('hello world')

})



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });