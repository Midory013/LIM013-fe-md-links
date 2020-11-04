# Nodejs

## InTRODUCCION A NODEJS
Es un entorno de ejecucion de JS de codigo abierto y multiplataforma. Nodejs para Js vendria a ser otro entorno de ejecucion, como lo es el navegador pero la `para los dos es el mismo motor de ejecucuion (V8)

### FS
Nos permite crear directorios, agregar archivos, removerlos, modificarlos permisos de un archivo 
Todas la opraciones del sistema de archivos tienen formularios "sincronicos", de devolucion de llamada(return) y basadas en promesas.

#### Listar archivos de un directorio 
    - readdirSync: se ejecuta de manera sincrona
    - readdir(path, callbacks): se ejecuta de manera asincrona

    Ejemplo "sincronico":
    
    