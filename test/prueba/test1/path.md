PROMESAS
---------
Es un objeto, reciben una funcion(callbacks) 
Tienes dos parametro (resolve: respuesta y reject: error)
Ejemplo:
Que es lo que quiero que me muestre cuando es exitosa y cuando es fallida
resolve: que es lo que queremos que muestre
reject: lo mismo que resol pero si es fallida
    new Promise((resolve, reject) => )

Estados: 
    - pendiente (pending): estado inicial, no cumplida o rechazada
    - cumplida (fultilled): significa que la operacion se completo satisfactoriamente
    - rechazada (rejected): significa que la operacion fallo 

------------------
Para consulmir promesas
.......................
Utilizamos:

    -the : respons
    - cath : error


    cost promesa = new Promise((resolve, reject) => {
        reject('Hola mundo')
    });

    promesa
        .then(response) => {
            console.log(response);
        })
        .cath((err) => {
            console.log(err)
        })