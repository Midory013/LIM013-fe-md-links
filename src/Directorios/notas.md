Como verificar si la ruta es un archivo o un directorio?
    [`Web`](https://www.technicalkeeda.com/nodejs-tutorials/how-to-check-if-path-is-file-or-directory-using-nodejs)

    - require('fs') - Cargar el módulo del sistema de archivos
    - fs.statSync(path)método devuelve la instancia de fs.Stats
    - stats.isFile() devuelve verdadero si la ruta del archivo es Archivo; de lo contrario, devuelve falso.
    - stats.isDirectory() devuelve verdadero si la ruta del archivo es Directorio; de lo contrario, devuelve falso.

    
    ```js
    var fs = require ( 'fs' );
    var stats = fs . statSync ( "c: \\ perro.jpg" );
    consola . log ( '¿es un archivo?' + stats . isFile ()); 
 
    var stats = fs . statSync ( "c: \\ demo" );
    consola . log ( '¿es el directorio?' + stats . isDirectory ());
    ```

/*
    if(fs.lstatSync(route).isFile()){ //EL MISMO ARCHIVOS 
    //return  voy hacer las sentencias cuando la ruta es un archivo
    } else { //RECORRER TODO EL DIRECCTORIO 
    //Aqui las sentencias cuando la ruta es un directorio 
    }*/

    .only
    .skip
    Como describe.only
    o it.only
--------------------------------------------------------------------------------------

{
    "env": {
      "es6": true,
      "node": true,
      "jest/globals": true
    },
    "extends": "eslint:recommended"
  }

--------------------------------------------------------------------------------------

---
FS
---
El modulo permite interactuar con el sistema de archivos 
       const fs = require('fs)
Todos las operaciones del sistema de archivo tienen formularios sincronicos 

-------
MARKED    -------> : MARKED Y new marked.Renderer()
------
Dsiponible como linea de comandos(CLI) y ejecutandose en proyectos JS del lado del cliente o del servidor 

 * Instalar:
        En la pc: npm i marked
        CLI: npm install -g marked 
        En el navegador: npm install marked 

---------------------------------------------------------------------------------------------------------

