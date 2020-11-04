const {opciValidate, getLinks} = require('./index.js')

const mdlinks = (ruta, options) => {
    console.log('Entra o no enta: ', ruta);
    return new Promise((resolve) => {
        if (options.validate === true) {
            return opciValidate(ruta);
        }
        //if (options.validate === false) {
            console.log(ruta);
            return resolve(getLinks(ruta));
        //}
    })
};
module.exports =  mdlinks;