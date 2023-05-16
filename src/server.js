const http = require("http")
const { router } = require('./router.js')

require("dotenv").config()

const startServer = () => {


    const port = process.env.PORT || 5000


    const server = http.createServer((req, res) => {

        return (router(req, res),estado(req,res))

    })


    server.listen(port, (error) => {

        error ? console.log(error) : console.log(`Server run on port ${port} Successfully`)
    })

}

const estado=(req,res)=>{(req.url!=='/data'&&req.url!=='/nosotros.js'&&req.url!=='/background-cv-web-1.jpg'&&req.url!=='/favicon.ico'&&req.url!=='/style.css'&&req.url!=='/index.js'&&req.url!=='/index.css'&&req.url!=='/contacto.css' &&req.url!== '/nosotros.css'&&req.url!=='/script.js')?console.log(`METHOD: ${req.method} STATUS: ${res.statusCode} URL: ${req.url} `):null}
module.exports = { startServer }