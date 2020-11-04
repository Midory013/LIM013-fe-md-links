const myfuncion = require('../src/index.js');//aqui colocamos el archivo el nombre 

describe('fileExist', () => {
  it('deeria retornarme tru si existe', () => {
    expect(typeof myfuncion.fileExist).toBe('function');
  });
});