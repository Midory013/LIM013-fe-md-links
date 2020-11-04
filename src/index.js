//path(ruta o camino) modulo me aydua a trabajar con rutas de archivos y directorios 
//fs (sistema de archivos) me permite interactuar con el sistema de archivos 
//stat() Estadistica del archivo. Cada archivos viene ci un conjunto de detalles que podemos inspeccionar 
//statSync(): 
// marked-> permite analizar markdown en HTML y leer los links
const fs = require('fs'); 
const path = require('path');  
const marked = require('marked'); 
//console.log(marked('Hola mundo'));
const renderer = new marked.Renderer()//transforma nuestro formato legible, lo estoy utilizando 
const fetch = require('node-fetch');
//console.log(renderer);
//const readline = require('readline');
//const { resolve } = require('path');

//sentencia Lynx
//const FILE = 'README.md';
const fileExist = (file) => fs.existsSync(file) ? true : false;
//const exist = fileExist(FILE)
//console.log(`Existe la ruta?: ${exist}`);

//ver si es un ruta absoluta
const pathAbsolute = (ruta) => path.isAbsolute(ruta) ? true : false;

//Convertir a ruta absoluta
const converPath = (ruta) => (pathAbsolute(ruta)) ? ruta : path.resolve( ruta);

//Si es un directorio, retorna un booleano
//const ruta = 'C:\\Users\\republica del peru\\Desktop\\Bootcamp\\Labo\\LIM013-data-lovers';
const isValidateDirectory = (ruta) => fs.statSync(ruta).isDirectory();

//Leo el contenido del direcorio
const getDirectory = (ruta) => {
    const readingDirectory = (ruta) => fs.readdirSync(ruta); //se utiliza para lleer sincronicamente el contenido de un directorio  
    return readingDirectory(ruta).map(element => path.join(ruta, element));//une todos los path segmentos utilizando el separador (/)
}

// determina si es un archivo 
const isValidateFile = (ruta) => fs.statSync(ruta).isFile();

//validar si ess archivo con extension .md 
// extname retorna la extension del path(ruta de archivos) 
const isFileTypeMd = (ruta) => path.extname(ruta);
console.log(isFileTypeMd('README.md'));
//console.log(getDirectory('test'));

//-------------------------------------------------------------------------------------------------------
//tener mi array de archivos md
const getFile = (ruta) => {
    let newArray = []; //
    const newPath = converPath(ruta);//todas path(I) tienes que absolutas, recien cones esto trabajo y ahi va a empeaza leer
    if(isValidateFile(newPath)){
        if(isFileTypeMd(newPath)){
            newArray.push(newPath);//agrago dentro del array
        }
    } else{
        getDirectory(ruta).forEach((element) => {
            const fileNewRuta = element;
            const getFileNewRuta = getFile(fileNewRuta);//llamo a la funcin getFile porque condicione que solo extraiga a los archivos "md"
            newArray = newArray.concat(getFileNewRuta);
        })
   }
    return newArray;
}
//console.log(getFile('./src'));

//-----------------------------------------------------------------------------------------------------------
const getLinks = (ruta) => {
    let newAllLinks = [];
    const readFile = (ruta) => fs.readFileSync(ruta,'utf-8'); //leer el contenido del archivo "Syn"(sincron)
    getFile(ruta).forEach((file) => {
        renderer.link = (href, text, file) => {
            const link = {
                href: href,
                text: href,
                file: file
            };
            newAllLinks.push(link);
        }
        marked(readFile(file),{renderer})
    });
    return newAllLinks;
}
//console.log(getLinks('./test/prueba/test4.md'));

//----------------------------------------------------------------------------------------------------------
const opciValidate = (ruta) => {
    let newGetLinks = getLinks(ruta);

    const validate = newGetLinks.map((link) => fetch(link.href) 
    .then((res) => ({ href: link.href,//url
                     text: link.text.substring(0,50), //texto de link 
                     file: link.text,
                     status: res.status,
                     message: res.statusText})//fetch omite el new Promise. A partir del fech me devuelve un array de promesas
    )
    .catch(() => {
                return { href: link.href,
                        text: link.text, 
                        file: link.text,
                        status: "error status",
                        message: "fail"}
    })
)
    return Promise.all(validate);
}
/*
opciValidate('C:\\Users\\republica del peru\\Desktop\\Bootcamp\\Labo\\LIM013-fe-md-links\\README.md')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));*/




module.exports = {
    pathAbsolute,
    fileExist,
    converPath,
    isValidateDirectory,
    isValidateFile,
    isFileTypeMd,
    getDirectory,
    getLinks,
    opciValidate,
}