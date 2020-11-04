
Para poder configurar nuestro cli.js
Lo tenemos que hacer en el "package.json":

       - agregamos:  "bin": {
                         "md-links": "src/cli.js"
                     }
              lo agregamos en el package.json
       
       - coloco:     #!/usr/bin/env node
                     coloco esto detro de mi archivo cli.js en primera linea para que se comente sola

       - luego en mi terminal:  -->  chmod +x src/cli.js  //esto es para que se pueda ejecutar o leer 
                                -->  npm link //se tiene que instalar,
                                     despues de esto ahora puedo correr mi cli con el nombre de mi archivo (md-links) y empezar a conprobar 