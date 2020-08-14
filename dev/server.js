const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')

const port = process.argv[2] || 8080



// const GoogleSpreadsheet = require('google-spreadsheet')
// const {promisify} = require('util')
// const creds = require('./client-secret.json')

// const doc = new GoogleSpreadsheet('1c1fxMn4VXgDIgU_DUbTN2Z2ZHhzhpZtyNpaHTjZ5rdQ')

// // const getInicio = async () => {
// //     await promisify(doc.useServiceAccountAuth)(creds)
// //     const info = await promisify(doc.getInfo)()
// //     const sheet = info.worksheets[0]    
// //     const rows = await promisify(sheet.getRows)({
// //         offset:1
// //     })
// //     for (var i = rows.length - 1; i >= 0; i--) {
// //         if (rows[i].sitioweb == 'INICIO') {
// //             result = rows[i]}
// //     }
// //     return result
// // }

const index = fs.readFileSync(
    path.join(process.cwd(), 'index.html'),
    'utf8'
)
const custom = fs.readFileSync(
    path.join(process.cwd(), 'custom.html'),
    'utf8'
)
const blog = fs.readFileSync(
    path.join(process.cwd(), 'dev', 'index.html'),
    'utf8'
)
const notFound = fs.readFileSync(
    path.join(process.cwd(), 'dev', '404.html'),
    'utf8'
)

http.createServer(function (req, res) {
    console.log(`${req.method} ${req.url}`)

    if (req.url === '/' || req.url === '/index' ) {
        res.statusCode = 200
        res.setHeader('Content-type', 'text/html')

        // const inicio = getInicio()
        // res.write(`<meta id="data"> ${inicio} </meta>`)
        res.end(index)
        return
    }else if (req.url === '/personalizar'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.write(custom)
        
        res.end()
        return 
    }else if (req.url === '/blog' || req.url.startsWith('/?p=')){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end(blog)
        return 
    }
    // parse URL
    const parsedUrl = url.parse(req.url)
    // extract URL path
    let pathname = `.${parsedUrl.pathname}`
    // based on the URL path, extract the file extension. e.g. .js, .doc, ...
    const ext = path.parse(pathname).ext
    // maps file extention to MIME typere
    const map = {
        '.ico': 'image/x-icon',
        '.html': 'text/html',
        '.js_commonjs-proxy': 'text/javascript',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.wav': 'audio/wav',
        '.mp3': 'audio/mpeg',
        '.svg': 'image/svg+xml',
        '.pdf': 'application/pdf',
        '.doc': 'application/msword',
        '.pbf': 'application/x-protobuf',
    }

    fs.exists(pathname, function (exist) {
        if (!exist) {
            if (!ext) {
                // if there is no extension, redirect to index with the uri as param
                res.writeHead(404, {
                    'Content-Type': 'text/html',
                    Location: '/?p=' + req.url,
                })
                res.end(notFound)
                return
            } else {
                // if the file is not found, return 404
                res.statusCode = 404
                res.end(`File ${pathname} not found!`)
                return
            }
        }

        // if is a directory search for index file matching the extention
        if (fs.statSync(pathname).isDirectory()) pathname += '/index' + ext

        // read file from file system
        fs.readFile(pathname, function (err, data) {
            if (err) {
                res.statusCode = 500
                res.end(`Error getting the file: ${err}.`)
            } else {
                // if the file is found, set Content-type and send data
                res.setHeader('Content-type', map[ext] || 'text/plain')
                res.end(data)
            }
        })
    })
}).listen(parseInt(port))

console.log(`Server listening on port ${port}`)
