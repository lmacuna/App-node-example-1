const fs = require("fs")
const path = require("path")
const querystring=require("querystring")
const util=require("util")


const router = (req, res) => {


    if (req.url == '/') {

        fs.readFile('./public/index.html', 'UTF-8', (error, index) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })

            return res.end(index)

        })


    } else if (req.url.match(/.css$/)) {

        const reqPath = path.join(__dirname, '../public', req.url)
        const fileStream = fs.createReadStream(reqPath, 'UTF-8')
        res.writeHead(200, { 'Content-Type': 'text/css' })
        fileStream.pipe(res)

    } else if (req.url.match(/.js$/)) {

        const reqPath = path.join(__dirname, '../public', req.url)
        const fileStream = fs.createReadStream(reqPath, 'UTF-8')
        res.writeHead(200, { 'Content-Type': 'text/js' })
        fileStream.pipe(res)

    } else if (req.url.match(/.jpg$/)) {

        const reqPath = path.join(__dirname, '../public', req.url)
        const fileStream = fs.createReadStream(reqPath)
        res.writeHead(200, { 'Content-Type': 'image/jpg' })
        fileStream.pipe(res)

    } else if (req.url == '/nosotros') {

        fs.readFile('./public/nosotros.html', 'UTF-8', (error, nosotros) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            return res.end(nosotros)
        })

    } else if (req.url == '/contacto') {

        fs.readFile('./public/contacto.html', 'UTF-8', (error, contacto) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            return res.end(contacto)
        })

    } else if (req.url == '/envio') {
        if (req.method == 'POST') {
         
                 let data='';

            req.on('data',(chunk)=>{
                  data+=chunk
            })
            req.on('end',()=>{

     
                 console.log(data)
                 
                 var dataOject=querystring.parse(data)
                 console.log(dataOject)
                
                 var dataJSON=util.inspect(dataOject)
                 console.log(dataJSON)
                
                fs.readFile('./public/landing.html','utf-8',(error,landing)=>{
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    return res.end(landing)
                })
            
             
               
            })
            
        }
    }else if(req.url=='/data'){
        var dat=require('../data.json')
        
        dat=JSON.stringify(dat)
        res.writeHead(200,{'Content-Type':'text/plain'})
       return res.end(dat)
    }


}


module.exports = { router }