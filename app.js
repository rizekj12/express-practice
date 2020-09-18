import express from "express"
import morgan from "morgan"
import characters from "./data/characters.json"
import _ from "lodash"
import characterRoutes from "./routes/characterRoutes"
import bodyParser from "body-parser"

const cors = require('cors')

const PORT = 3000

const server = express();

const path = require('path');

server.use(cors())
server.use(morgan('tiny'))
server.use(bodyParser.json())
server.set('views', path.join('views'))
server.set('view engine', 'ejs')

server.get('/', (req, res) => {
    res.render('index', {
        characters
    })
})

const buildURL = (version , path) => `/api/${version}/${path}`;
const CHARACTER_BASE_URL = buildURL('v1', 'characters')


server.use(CHARACTER_BASE_URL, characterRoutes)



server.listen(3000, ( )=> {
    console.log(`server started on port ${PORT}`)

});